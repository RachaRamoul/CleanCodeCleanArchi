export class Maintenance {
  constructor(
    public id: string,
    public motorcycleId: string,
    public partId: string,
    public maintenanceType: string,
    public recommendations: string,
    public cost: number,
    public date: Date
  ) {}
}
