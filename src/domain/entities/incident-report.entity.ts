export class IncidentReport {
  constructor(
    public id: string,
    public driverId: string,
    public incidentType: string,
    public description: string,
    public isMotorcycleRideTest: boolean,
    public date: Date
  ) {}
}
