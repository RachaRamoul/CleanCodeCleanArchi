import ModelPostgresEntity from '../entities/model.entity-postgres';
import { Model } from "../../../../../domain/entities/model.entity";

export class ModelMapper {
  static toDomain(modelEntity: ModelPostgresEntity): Model {
    return new Model(
      modelEntity.modelId,
      modelEntity.name,
      modelEntity.manufacturer,
      modelEntity.maintenanceFrequency
    );
  }

  static toPersistence(domain: Model): ModelPostgresEntity {
    return new ModelPostgresEntity({
      modelId: domain.modelId,
      name: domain.name,
      manufacturer: domain.manufacturer,
      maintenanceFrequency: domain.maintenanceFrequency,
    });
  }
}
