import MotorcycleModelPostgresEntity from '../entities/motorcycle-model.entity-postgres';
import { MotorcycleModel } from "../../../../../domain/entities/motorcycle-model.entity";
import Name from '../../../../../domain/value-objects/name.vo';

export class MotorcycleModelMapper {
  static toDomain(motorcycleModelEntity: MotorcycleModelPostgresEntity): MotorcycleModel {
    return new MotorcycleModel(
      motorcycleModelEntity.id,
      new Name(motorcycleModelEntity.name),
      motorcycleModelEntity.maintenanceFrequencyInKilometers
    );
  }

  static toModel(motorcycleModel: MotorcycleModel): MotorcycleModelPostgresEntity {
    const motorcycleModelPeristence = new MotorcycleModelPostgresEntity();
    
    motorcycleModelPeristence.name = motorcycleModel.name.value;
    motorcycleModelPeristence.maintenanceFrequencyInKilometers = motorcycleModel.maintenanceFrequencyInKilometers;

    if (motorcycleModel.id.length !== 0) {
      motorcycleModelPeristence.id = motorcycleModel.id;
    }
    return motorcycleModelPeristence;
  }
}
