// infrastructure/database/mongodb/persistence/mappers/model.mapper-mongodb.ts

import { Model } from '../../../../../domain/entities/model.entity';
import { IModel, ModelModel } from '../entities/model.mongo.entity';

export class ModelMapper {
  static toDomain(modelEntity: IModel): Model {
    return new Model(
      modelEntity.modelId,                // modelId
      modelEntity.name,                   // name
      modelEntity.manufacturer,           // manufacturer
      modelEntity.maintenanceFrequency,   // maintenanceFrequency
    );
  }

  static toModel(model: Model): IModel {
    // Crée une nouvelle instance du modèle Mongoose avec les données
    return new ModelModel({
      modelId: model.modelId,
      name: model.name,
      manufacturer: model.manufacturer,  // Ajoute la propriété manufacturer
      maintenanceFrequency: model.maintenanceFrequency,
    });
  }
}
