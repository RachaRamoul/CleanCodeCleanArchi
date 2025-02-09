import { MotorcyclePart } from '../../domain/entities/motorcycle-part.entity';

export interface IMotorcyclePartRepository {
  add(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart>;
  findById(id: string): Promise<MotorcyclePart | null>;
  getAll(): Promise<MotorcyclePart[]>;
  update(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart>;
  delete(id: string): Promise<void>;
}