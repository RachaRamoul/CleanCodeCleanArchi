export class InvalidMileage extends Error { 
    public constructor(public readonly mileage: number) {
      super(`Invalid mileage: ${mileage}. Mileage must be a non-negative number.`);
      this.name = "InvalidMileage";
    }
}  