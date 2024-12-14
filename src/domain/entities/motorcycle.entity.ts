import { Model } from './model.entity'; 

export class Motorcycle {
  motorcycleId: string;
  model: Model;
  mileage: number;
  status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED'; 
  companyId: string;

  constructor(
    motorcycleId: string,
    model: Model,
    mileage: number,
    status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED',
    companyId: string
  ) {
    this.motorcycleId = motorcycleId;
    this.model = model;
    this.mileage = mileage;
    this.status = status;
    this.companyId = companyId;
  }

}
