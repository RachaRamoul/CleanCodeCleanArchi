import { MotorcyclePart } from '../../domain/entities/motorcycle-part.entity';

export interface IMotorcyclePartRepository {
  findById(id: string): Promise<MotorcyclePart | null>;
  save(motorcyclePart: MotorcyclePart): Promise<MotorcyclePart>;
  listMotorcycleParts(): Promise<MotorcyclePart[]>;
  removeMotorcyclePart(id: string): Promise<void>;
}
