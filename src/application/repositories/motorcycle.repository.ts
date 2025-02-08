import { Motorcycle } from "../../domain/entities/motorcycle.entity";
import Mileage from "../../domain/value-objects/mileage.vo";

export interface IMotorcycleRepository {
  findById(id: string): Promise<Motorcycle | null>;
  save(motorcycle: Motorcycle): Promise<Motorcycle>;
  findAll(): Promise<Motorcycle[]>;
  update(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle>;
  remove(id: string): Promise<void>;
}