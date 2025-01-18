export class MotorcycleRideTest {
    constructor(
      public id: string,
      public motorcycleId: string,
      public driverId: string,
      public date: Date,
      public testDuration: number, //in hours
      public incidentReportId: string
    ) {}
  }
  