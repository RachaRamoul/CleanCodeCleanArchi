// infrastructure/database/mongodb/persistence/mappers/motorcycle.mapper-mongodb.ts

import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle, MotorcycleModel } from '../entities/motorcycle.mongo.entity';
import { ModelModel } from '../entities/model.mongo.entity';  // Importer le modèle de Model
import { CompanyModel } from '../entities/company.entity-mongodb';  // Importer le modèle de Company

export class MotorcycleMapper {
  // Méthode pour convertir un document Mongoose en une entité du domaine
  static async toDomain(motorcycleEntity: IMotorcycle): Promise<Motorcycle> {
    // Résolution des références (Model et Company) en utilisant les IDs
    const modelEntity = await ModelModel.findById(motorcycleEntity.modelId);  // Récupère l'entité Model à partir de son ID
    const companyEntity = await CompanyModel.findById(motorcycleEntity.companyId);  // Récupère l'entité Company à partir de son ID
    
    // Si l'une des entités référencées n'existe pas, lever une erreur
    if (!modelEntity || !companyEntity) {
      throw new Error("Model or Company not found.");
    }

    // Retourne une nouvelle instance de Motorcycle (dommaine) avec les entités résolues
    return new Motorcycle(
      motorcycleEntity.motorcycleId,   // motorcycleId
      modelEntity,                     // model (entité Model récupérée)
      motorcycleEntity.mileage,        // mileage
      motorcycleEntity.status,         // status
      companyEntity                    // companyId (entité Company récupérée)
    );
  }

  // Méthode pour convertir une entité du domaine en un modèle Mongoose
  static toModel(motorcycle: Motorcycle): IMotorcycle {
    // Crée une nouvelle instance du modèle Mongoose avec les données du domaine
    return new MotorcycleModel({
      motorcycleId: motorcycle.motorcycleId,
      modelId: motorcycle.model.modelId,  // Ajoute la référence de Model
      mileage: motorcycle.mileage,
      status: motorcycle.status,
      companyId: motorcycle.company.companyId,  // Ajoute la référence de Company
    });
  }
}
