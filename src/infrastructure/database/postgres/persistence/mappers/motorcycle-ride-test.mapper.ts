import { MotorcycleRideTestPostgresEntity } from '../entities/motorcycle-ride-test.postgres.entity';
import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';

export class MotorcycleRideTestMapper {
  static toDomain(entity: MotorcycleRideTestPostgresEntity): MotorcycleRideTest {
    return new MotorcycleRideTest(
      entity.motorcycleRideTestId,
      entity.motorcycleId,
      entity.driverId,
      entity.date,
      entity.testDuration,
      entity.incidentReport
    );
  }

  static toPersistence(domain: MotorcycleRideTest): MotorcycleRideTestPostgresEntity {
    return new MotorcycleRideTestPostgresEntity({
      motorcycleRideTestId: domain.motorcycleRideTestId,
      motorcycleId: domain.motorcycleId,
      driverId: domain.driverId,
      date: domain.date,
      testDuration: domain.testDuration,
      incidentReport: domain.incidentReport
    });
  }
}
