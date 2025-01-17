export class MotorcyclePart {
  constructor(
    public partId: string,
    public name: string,
    public description: string, // Changer de string | undefined à string
    public stockQuantity: number,
    public cost: number,
    public lowStockAlert: boolean
  ) {}
}
