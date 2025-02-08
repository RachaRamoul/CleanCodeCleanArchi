import Name from "../value-objects/name.vo";

export class MotorcycleModel {
  constructor(
    public id: string,
    public name: Name,
    public maintenanceFrequencyInKilometers: number
  ) {}
}
