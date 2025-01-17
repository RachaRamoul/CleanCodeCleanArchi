import { Model } from '../../../../domain/entities/model.entity';
import { ModelModel } from '../persistence/entities/model.mongo.entity'; 
import { ModelMapper } from '../persistence/mappers/model.mapper-mongodb'; 
import { IModelRepository } from '../../../../application/repositories/model.repository';
import { ObjectId } from 'mongodb';

export class MongoModelRepository implements IModelRepository {

  async findById(id: string): Promise<Model | null> {
    const modelEntity = await ModelModel.findOne({ _id: new ObjectId(id) });
    return modelEntity ? ModelMapper.toDomain(modelEntity) : null;
  }

  async save(model: Model): Promise<Model> {
    const modelEntity = ModelMapper.toModel(model);
    const savedModelEntity = await modelEntity.save();
    return ModelMapper.toDomain(savedModelEntity);
  }

  async listModels(): Promise<Model[]> {
    const modelEntities = await ModelModel.find();
    return modelEntities.map((modelEntity) => ModelMapper.toDomain(modelEntity));
  }

  async removeModel(id: string): Promise<void> {
    await ModelModel.deleteOne({ _id: new ObjectId(id) });
  }
}
