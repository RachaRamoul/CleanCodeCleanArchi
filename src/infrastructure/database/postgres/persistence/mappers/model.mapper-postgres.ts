import ModelPostgresEntity from '../entities/model.entity-postgres';
import { Model } from "../../../../../domain/entities/model.entity";

export class ModelMapper {
  static toDomain(modelEntity: ModelPostgresEntity): Model {
    return new Model(
      modelEntity.id,
      modelEntity.name,
      modelEntity.manufacturer,
      modelEntity.maintenanceFrequency
    );
  }

  static toModel(model: Model): ModelPostgresEntity {
    return new ModelPostgresEntity(model);
  }
}
