import { Motorcycle } from '../../../../../domain/entities/motorcycle.entity';
import { IMotorcycle } from '../entities/motorcycle.mongo.entity';

export class MotorcycleMapper {
  static toDomain(motorcycleEntity: IMotorcycle): Motorcycle {
    // Convertit les données du modèle MongoDB en entité métier
    return new Motorcycle(
      motorcycleEntity.motorcycleId,
      motorcycleEntity.modelId,
      motorcycleEntity.mileage,
      motorcycleEntity.status,
      motorcycleEntity.companyId
    );
  }

  static toModel(motorcycle: Motorcycle): any {  // Utilise 'any' pour ignorer les méthodes Mongoose
    // Crée un objet simple sans méthodes Mongoose
    return {
      motorcycleId: motorcycle.motorcycleId,
      modelId: motorcycle.modelId,
      mileage: motorcycle.mileage,
      status: motorcycle.status,
      companyId: motorcycle.companyId
    };
  }
}
