import { MotorcycleModel } from '../../domain/entities/motorcycle-model.entity';
import Name from '../../domain/value-objects/name.vo';

export interface IMotorcycleModelRepository {
  save(model: MotorcycleModel): Promise<MotorcycleModel>;
  findById(id: string): Promise<MotorcycleModel | null>;
  findByName(name: Name): Promise<MotorcycleModel | null>;
  findAll(): Promise<MotorcycleModel[]>;
  remove(id: string): Promise<void>;
}
