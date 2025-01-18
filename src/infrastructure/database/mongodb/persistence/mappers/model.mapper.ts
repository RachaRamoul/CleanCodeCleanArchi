// infrastructure/database/mongodb/persistence/mappers/model.mapper-mongodb.ts

import { Model } from '../../../../../domain/entities/model.entity';
import { IModel, ModelModel } from '../entities/model.mongo.entity';

export class ModelMapper {
  static toDomain(modelEntity: IModel): Model {
    return new Model(
      modelEntity.modelId,                
      modelEntity.name,                   
      modelEntity.manufacturer,           
      modelEntity.maintenanceFrequency,   
    );
  }

  static toModel(model: Model): IModel {
    return new ModelModel({
      modelId: model.modelId,
      name: model.name,
      manufacturer: model.manufacturer, 
      maintenanceFrequency: model.maintenanceFrequency,
    });
  }
}
