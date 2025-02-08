import Mileage from "../value-objects/mileage.vo";

export class Motorcycle {
  constructor(
    public id: string,
    public modelId: string,
    public mileage: Mileage,
    public status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED',
    public companyId: string
  ) {}
}