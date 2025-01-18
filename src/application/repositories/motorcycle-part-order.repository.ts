import { MotorcyclePartOrder } from '../../domain/entities/motorcycle-part-order.entity';

export interface IMotorcyclePartOrderRepository {
  findById(id: string): Promise<MotorcyclePartOrder | null>;
  save(motorcyclePartOrder: MotorcyclePartOrder): Promise<MotorcyclePartOrder>;
  listMotorcyclePartOrders(): Promise<MotorcyclePartOrder[]>;
  removeMotorcyclePartOrder(id: string): Promise<void>;
}
