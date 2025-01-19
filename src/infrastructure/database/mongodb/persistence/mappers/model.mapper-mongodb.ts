import { Model } from '../../../../../domain/entities/model.entity';
import { IModel, ModelModel } from '../entities/model.entity-mongodb';

export class ModelMapper {
  static toDomain(modelEntity: IModel): Model {
    return new Model(
      modelEntity.id,                
      modelEntity.name,                   
      modelEntity.manufacturer,           
      modelEntity.maintenanceFrequency,   
    );
  }

  static toModel(model: Model): IModel {
    return new ModelModel(model);
  }
}
