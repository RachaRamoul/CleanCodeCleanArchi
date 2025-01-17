export class MotorcycleRideTest {
    constructor(
      public motorcycleRideTestId: string,
      public motorcycleId: string,
      public driverId: string,
      public date: Date,
      public testDuration: number, // In hours
      public incidentReport: string
    ) {}
  }
  