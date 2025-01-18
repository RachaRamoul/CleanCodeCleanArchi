import { MotorcycleRideTest } from '../../../../domain/entities/motorcycle-ride-test.entity';
import { MotorcycleRideTestModel } from '../persistence/entities/motorcycle-ride-test.entity-mongodb'; 
import { MotorcycleRideTestMapper } from '../persistence/mappers/motorcycle-ride-test.mapper-mongodb'; 
import { IMotorcycleRideTestRepository } from '../../../../application/repositories/motorcycle-ride-test.repository';
import { ObjectId } from 'mongodb';

export class MongoMotorcycleRideTestRepository implements IMotorcycleRideTestRepository {

  async findById(id: string): Promise<MotorcycleRideTest | null> {
    const motorcycleRideTestEntity = await MotorcycleRideTestModel.findOne({ _id: new ObjectId(id) });
    return motorcycleRideTestEntity ? MotorcycleRideTestMapper.toDomain(motorcycleRideTestEntity) : null;
  }

  async save(motorcycleRideTest: MotorcycleRideTest): Promise<MotorcycleRideTest> {
    const motorcycleRideTestEntity = MotorcycleRideTestMapper.toModel(motorcycleRideTest);
    const savedMotorcycleRideTestEntity = await motorcycleRideTestEntity.save();
    return MotorcycleRideTestMapper.toDomain(savedMotorcycleRideTestEntity);
  }

  async listMotorcycleRideTests(): Promise<MotorcycleRideTest[]> {
    const motorcycleRideTestEntities = await MotorcycleRideTestModel.find();
    return motorcycleRideTestEntities.map((motorcycleRideTestEntity) => MotorcycleRideTestMapper.toDomain(motorcycleRideTestEntity));
  }

  async removeMotorcycleRideTest(id: string): Promise<void> {
    await MotorcycleRideTestModel.deleteOne({ _id: new ObjectId(id) });
  }
}
