import { Motorcycle } from "../../domain/entities/motorcycle.entity";

export interface IMotorcycleRepository {
  findById(id: string): Promise<Motorcycle | null>;
  save(motorcycle: Motorcycle): Promise<Motorcycle>;
  findAll(): Promise<Motorcycle[]>;
  update(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle>;
  remove(id: string): Promise<void>;
}