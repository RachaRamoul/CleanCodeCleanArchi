import { InvalidMileage } from "../errors/mileage.error";

export default class Mileage {
    constructor(private readonly mileage: number) {
        if (!this.isValid(mileage)) {
            throw new InvalidMileage(mileage);
        }
        this.mileage = mileage;
    }

    private isValid(mileage: number): boolean {
        return mileage >= 0;
    }

    public get value(): number {
        return this.mileage;
    }

    public toJSON(): number {
        return this.mileage;
    }
}