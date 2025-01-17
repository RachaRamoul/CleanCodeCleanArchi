import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';
import { IMotorcycleRideTest, MotorcycleRideTestModel } from '../entities/motorcycle-ride-test.entity-mongodb';

export class MotorcycleRideTestMapper {
  static toDomain(motorcycleRideTestEntity: IMotorcycleRideTest): MotorcycleRideTest {
    return new MotorcycleRideTest(
      motorcycleRideTestEntity.motorcycleRideTestId,  // motorcycleRideTestId
      motorcycleRideTestEntity.motorcycleId,          // motorcycleId
      motorcycleRideTestEntity.driverId,              // driverId
      motorcycleRideTestEntity.date,                  // date
      motorcycleRideTestEntity.testDuration,          // testDuration (in hours)
      motorcycleRideTestEntity.incidentReport         // incidentReport
    );
  }

  static toModel(motorcycleRideTest: MotorcycleRideTest): IMotorcycleRideTest {
    return new MotorcycleRideTestModel(motorcycleRideTest);
  }
}
