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

  static toModel(motorcycle: Motorcycle): Partial<MotorcyclePostgresEntity> {
    return new MotorcyclePostgresEntity(motorcycle);
  }
}
