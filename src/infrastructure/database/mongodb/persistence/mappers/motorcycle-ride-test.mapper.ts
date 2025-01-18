import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';
import { IMotorcycleRideTest, MotorcycleRideTestModel } from '../entities/motorcycle-ride-test.entity-mongodb';

export class MotorcycleRideTestMapper {
  static toDomain(motorcycleRideTestEntity: IMotorcycleRideTest): MotorcycleRideTest {
    return new MotorcycleRideTest(
      motorcycleRideTestEntity.motorcycleRideTestId,  
      motorcycleRideTestEntity.motorcycleId,          
      motorcycleRideTestEntity.driverId,              
      motorcycleRideTestEntity.date,                  
      motorcycleRideTestEntity.testDuration,          
      motorcycleRideTestEntity.incidentReport        
    );
  }

  static toModel(motorcycleRideTest: MotorcycleRideTest): IMotorcycleRideTest {
    return new MotorcycleRideTestModel(motorcycleRideTest);
  }
}
