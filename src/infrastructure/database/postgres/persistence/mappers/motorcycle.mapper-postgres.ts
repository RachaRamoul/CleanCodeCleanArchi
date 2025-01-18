import { Motorcycle } from "../../../../../domain/entities/motorcycle.entity";
import { MotorcyclePostgresEntity } from "../entities/motorcycle.entity-postgres";

export class MotorcycleMapper {
  static toDomain(entity: MotorcyclePostgresEntity): Motorcycle {
    return new Motorcycle(
      entity.id,         
      entity.modelId,  
      entity.mileage,  
      entity.status,   
      entity.companyId 
    );
  }

  static toPersistence(domain: Motorcycle): Partial<MotorcyclePostgresEntity> {
    return {
      id: domain.motorcycleId,
      modelId: domain.modelId,
      mileage: domain.mileage,
      status: domain.status,
      companyId: domain.companyId,
    };
  }
}
