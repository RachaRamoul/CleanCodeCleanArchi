import { Motorcycle } from "../../domain/entities/motorcycle.entity";

export interface IMotorcycleRepository {
  save(motorcycle: Motorcycle): Promise<Motorcycle>;
  findAll(): Promise<Motorcycle[]>;
}
