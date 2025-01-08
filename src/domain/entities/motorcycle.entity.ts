export class Motorcycle {
  constructor(
    public motorcycleId: string,
    public modelId: string,
    public mileage: number,
    public status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED',
    public companyId: string
  ) {}
}
