import { MotorcyclePart } from '../entities/motorcycle-part.entity';

export class MotorcyclePartOrder {
  constructor(
    public orderId: string,
    public motorcyclePart: MotorcyclePart,
    public cost: number,
    public orderDate: Date, 
    public deliveryDate: Date 
  ) {}
}

