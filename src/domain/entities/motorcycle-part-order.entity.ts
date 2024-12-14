import { MotorcyclePart } from './motorcycle-part.entity';

export class MotorcyclePartOrder {
  orderId: string;
  motorcyclePart: MotorcyclePart;
  orderDate: Date;
  cost: number;
  deliveryDate: Date;

  constructor(orderId: string, motorcyclePart: MotorcyclePart, orderDate: Date, cost: number, deliveryDate: Date) {
    this.orderId = orderId;
    this.motorcyclePart = motorcyclePart;
    this.orderDate = orderDate;
    this.cost = cost;
    this.deliveryDate = deliveryDate;
  }

}
