import { MotorcyclePartPostgresEntity } from "../entities/motorcycle-part.postgres.entity";
import { MotorcyclePart } from "../../../../../domain/entities/motorcycle-part.entity";

export class MotorcyclePartMapper {
  // Convertir l'entité PostgreSQL en entité du domaine
  static toDomain(entity: MotorcyclePartPostgresEntity): MotorcyclePart {
    return new MotorcyclePart(
      entity.partId,
      entity.name,
      entity.description, // Assure la correspondance pour la propriété description
      entity.stockQuantity,
      Number(entity.cost), // Conversion explicite pour éviter les problèmes liés au type decimal
      entity.lowStockAlert
    );
  }

  // Convertir l'entité du domaine en entité PostgreSQL
  static toPersistence(domain: MotorcyclePart): MotorcyclePartPostgresEntity {
    return new MotorcyclePartPostgresEntity(
      domain.partId,
      domain.name,
      Number(domain.cost), // Conversion explicite pour respecter le type attendu
      domain.stockQuantity,
      domain.lowStockAlert,
      domain.description // Gère le champ description (optionnel ou non)
    );
  }
}
