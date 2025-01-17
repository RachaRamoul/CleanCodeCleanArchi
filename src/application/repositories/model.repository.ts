import { Model } from '../../domain/entities/model.entity';

export interface IModelRepository {
  findById(id: string): Promise<Model | null>;
  save(model: Model): Promise<Model>;
  listModels(): Promise<Model[]>;
  removeModel(id: string): Promise<void>;
}
