import { AddMotorcycleModelUseCase } from '../../../../../../application/usecases/motorcycle-model/add-motorcycle-model.usecase';
import { GetMotorcycleModelByIdUseCase } from '../../../../../../application/usecases/motorcycle-model/get-motorcycle-model-by-id.usecase';
import { GetMotorcycleModelByNameUseCase } from '../../../../../../application/usecases/motorcycle-model/get-motorcycle-model-by-name.usecase';
import { ListMotorcycleModelsUseCase } from '../../../../../../application/usecases/motorcycle-model/list-motorcycle-model.usecase';
import { UpdateMotorcycleModelUseCase } from '../../../../../../application/usecases/motorcycle-model/update-motorcycle-model.usecase';
import { RemoveMotorcycleModelUseCase } from '../../../../../../application/usecases/motorcycle-model/remove-motorcycle-model.usecase';
import { MotorcycleModel } from '../../../../../../domain/entities/motorcycle-model.entity';
import { repositories } from '../../../../../database/config/repository.config';
import Name from '../../../../../../domain/value-objects/name.vo';

export class MotorcycleModelService {
  constructor(private motorcycleModelRepository = repositories().MotorcycleModelRepository) {}

  async addMotorcycleModel(name: string, maintenanceFrequencyInKilometers: number): Promise<MotorcycleModel> {
    const addMotorcycleModelUseCase = new AddMotorcycleModelUseCase(this.motorcycleModelRepository);
    const nameObject = new Name(name);

    return await addMotorcycleModelUseCase.execute(nameObject, maintenanceFrequencyInKilometers);
  }

  async getMotorcycleModelById(id: string): Promise<MotorcycleModel | null> {
    const getMotorcycleModelByIdUseCase = new GetMotorcycleModelByIdUseCase(this.motorcycleModelRepository);
    return await getMotorcycleModelByIdUseCase.execute(id);
  }

  async getMotorcycleModelByName(name: string): Promise<MotorcycleModel | null> {
    const getMotorcycleModelByNameUseCase = new GetMotorcycleModelByNameUseCase(this.motorcycleModelRepository);
    const nameObject = new Name(name);
    return await getMotorcycleModelByNameUseCase.execute(nameObject);
  }

  async listMotorcycleModels(): Promise<MotorcycleModel[]> {
    const listMotorcycleModelsUseCase = new ListMotorcycleModelsUseCase(this.motorcycleModelRepository);
    return await listMotorcycleModelsUseCase.execute();
  }

  async updateMotorcycleModel(id: string, updateData: Partial<MotorcycleModel>): Promise<MotorcycleModel> {
    const updateMotorcycleModelUseCase = new UpdateMotorcycleModelUseCase(this.motorcycleModelRepository);
    return await updateMotorcycleModelUseCase.execute(id, updateData);
  }

  async deleteMotorcycleModel(id: string): Promise<void> {
    const removeMotorcycleModelUseCase = new RemoveMotorcycleModelUseCase(this.motorcycleModelRepository);
    await removeMotorcycleModelUseCase.execute(id);
  }
}
