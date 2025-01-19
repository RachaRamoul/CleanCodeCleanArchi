import { MotorcycleRideTestPostgresEntity } from '../entities/motorcycle-ride-test.postgres.entity';
import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';

export class MotorcycleRideTestMapper {
  static toDomain(entity: MotorcycleRideTestPostgresEntity): MotorcycleRideTest {
    return new MotorcycleRideTest(
      entity.id,
      entity.motorcycleId,
      entity.driverId,
      entity.date,
      entity.testDuration,
      entity.incidentReport
    );
  }

  static toModel(motorcycleRideTest: MotorcycleRideTest): MotorcycleRideTestPostgresEntity {
    return new MotorcycleRideTestPostgresEntity(motorcycleRideTest);
  }
}
