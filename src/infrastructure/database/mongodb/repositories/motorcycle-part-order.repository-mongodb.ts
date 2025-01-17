import { MotorcyclePartOrder } from '../../../../domain/entities/motorcycle-part-order.entity';
import { MotorcyclePartOrderModel } from '../persistence/entities/motorcycle-part-order.mongo.entity'; 
import { MotorcyclePartOrderMapper } from '../persistence/mappers/motorcycle-part-order.mapper-mongodb'; 
import { IMotorcyclePartOrderRepository } from '../../../../application/repositories/motorcycle-part-order.repository';
import { ObjectId } from 'mongodb';

export class MongoMotorcyclePartOrderRepository implements IMotorcyclePartOrderRepository {

  async findById(id: string): Promise<MotorcyclePartOrder | null> {
    const motorcyclePartOrderEntity = await MotorcyclePartOrderModel.findOne({ _id: new ObjectId(id) });
    return motorcyclePartOrderEntity ? MotorcyclePartOrderMapper.toDomain(motorcyclePartOrderEntity) : null;
  }

  async save(motorcyclePartOrder: MotorcyclePartOrder): Promise<MotorcyclePartOrder> {
    const motorcyclePartOrderEntity = MotorcyclePartOrderMapper.toModel(motorcyclePartOrder);
    const savedMotorcyclePartOrderEntity = await motorcyclePartOrderEntity.save();
    return MotorcyclePartOrderMapper.toDomain(savedMotorcyclePartOrderEntity);
  }

  async listMotorcyclePartOrders(): Promise<MotorcyclePartOrder[]> {
    const motorcyclePartOrderEntities = await MotorcyclePartOrderModel.find();
    return motorcyclePartOrderEntities.map((motorcyclePartOrderEntity) => MotorcyclePartOrderMapper.toDomain(motorcyclePartOrderEntity));
  }

  async removeMotorcyclePartOrder(id: string): Promise<void> {
    await MotorcyclePartOrderModel.deleteOne({ _id: new ObjectId(id) });
  }
}
