export class IncidentReport {
  constructor(
    public incidentReportId: string,
    public incidentType: string,
    public description: string,
    public date: Date
  ) {}
}
