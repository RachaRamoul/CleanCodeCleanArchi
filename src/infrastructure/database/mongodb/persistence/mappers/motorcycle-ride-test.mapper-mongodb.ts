import mongoose from 'mongoose';
import { MotorcycleRideTest } from '../../../../../domain/entities/motorcycle-ride-test.entity';
import { IMotorcycleRideTest, MotorcycleRideTestModel } from '../entities/motorcycle-ride-test.entity-mongodb';
import { MotorcycleModel } from '../entities/motorcycle.entity-mongodb';
import { DriverModel } from '../entities/driver.entity-mongodb';
import { IncidentReportModel } from '../entities/incident-report.entity-mongodb';

export class MotorcycleRideTestMapper {
  static async toDomain(motorcycleRideTestEntity: IMotorcycleRideTest): Promise<MotorcycleRideTest> {
    const motorcycleEntity = await MotorcycleModel.findById(motorcycleRideTestEntity.motorcycleId);  
    const driverEntity = await DriverModel.findById(motorcycleRideTestEntity.driverId);  
    const incidentReportEntity = await IncidentReportModel.findById(motorcycleRideTestEntity.incidentReportId);  
    
    if(!motorcycleEntity){
      throw new Error('Motorcycle not found');
    }else if(!driverEntity){
      throw new Error('Driver not found');
    }else if(!incidentReportEntity){
      throw new Error('Incident report not found');
    }

    return new MotorcycleRideTest(
      motorcycleRideTestEntity.id,  
      (motorcycleEntity._id as mongoose.Types.ObjectId).toString(),          
      (driverEntity._id as mongoose.Types.ObjectId).toString(),          
      motorcycleRideTestEntity.date,                  
      motorcycleRideTestEntity.testDuration,          
      (incidentReportEntity._id as mongoose.Types.ObjectId).toString(),          
    );
  }

  static toModel(motorcycleRideTest: MotorcycleRideTest): IMotorcycleRideTest {
    return new MotorcycleRideTestModel(motorcycleRideTest);
  }
}
