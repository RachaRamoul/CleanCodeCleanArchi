import { MotorcyclePart } from '../../domain/entities/motorcycle-part.entity';

export interface IMotorcyclePartRepository {
  add(motorcyclePart: MotorcyclePart): Promise<void>;
  getById(id: string): Promise<MotorcyclePart | null>;
  getAll(): Promise<MotorcyclePart[]>;
  update(motorcyclePart: MotorcyclePart): Promise<void>;
  delete(id: string): Promise<void>;
}