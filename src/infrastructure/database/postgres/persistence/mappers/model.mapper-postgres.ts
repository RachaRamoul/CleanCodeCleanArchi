import { ModelPostgresEntity } from '../entities/model.postgres.entity';
import { Model } from "../../../../../domain/entities/model.entity";

export class ModelMapper {
  // Convertir l'entité PostgreSQL en entité du domaine
  static toDomain(modelEntity: ModelPostgresEntity): Model {
    return new Model(
      modelEntity.modelId,
      modelEntity.name,
      modelEntity.manufacturer,
      modelEntity.maintenanceFrequency
    );
  }

  // Convertir l'entité du domaine en entité PostgreSQL
  static toPersistence(domain: Model): ModelPostgresEntity {
    return new ModelPostgresEntity({
      modelId: domain.modelId,
      name: domain.name,
      manufacturer: domain.manufacturer,
      maintenanceFrequency: domain.maintenanceFrequency,
    });
  }
}
