export class MotorcyclePart {
  constructor(
    public id: string,
    public name: string,
    public description: string, 
    public stockQuantity: number,
    public cost: number,
    public lowStockAlert: number
  ) {}
}
