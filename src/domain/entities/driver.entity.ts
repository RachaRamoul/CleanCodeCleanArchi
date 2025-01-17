export class Driver {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public licenseNumber: string,
    public experienceYears: number,
    public incidentHistory: string[]  // Incident history en tableau de chaînes
  ) {}
}
