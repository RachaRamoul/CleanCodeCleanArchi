
export class MotorcyclePartOrder {
  constructor(
    public id: string,
    public motorcyclePartId: string,
    public cost: number,
    public orderDate: Date, 
    public deliveryDate: Date 
  ) {}
}

