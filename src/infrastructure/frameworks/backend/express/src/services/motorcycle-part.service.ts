import { MotorcyclePart } from "../../../../../../domain/entities/motorcycle-part.entity";
import { AddMotorcyclePartUseCase } from "../../../../../../application/usecases/motorcycle-part/add-motorcycle-part.usecase";
import { DeleteMotorcyclePartUseCase } from "../../../../../../application/usecases/motorcycle-part/delete-motorcycle-part.usecase";
import { GetMotorcyclePartUseCase } from "../../../../../../application/usecases/motorcycle-part/get-motorcycle-part.usecase";
import { UpdateMotorcyclePartUseCase } from "../../../../../../application/usecases/motorcycle-part/update-motorcycle-part.usecase";
import { GetAllMotorcyclePartsUseCase } from "../../../../../../application/usecases/motorcycle-part/get-all-motorcycle-parts.usecase";
import { IMotorcyclePartRepository } from "../../../../../../application/repositories/motorcycle-part.repository";
import { repositories } from "../../../../../database/config/repository.config";

const { MotorcyclePartRepository }: { MotorcyclePartRepository: IMotorcyclePartRepository } = repositories();

export class MotorcyclePartService {
  constructor(private motorcyclePartRepository: IMotorcyclePartRepository = MotorcyclePartRepository) {}

  async getMotorcyclePartById(id: string): Promise<MotorcyclePart | null> {
    const getMotorcyclePartUseCase = new GetMotorcyclePartUseCase(this.motorcyclePartRepository);
    return await getMotorcyclePartUseCase.execute(id);
  }

  async addMotorcyclePart(motorcyclePart: MotorcyclePart): Promise<void> {
    const addMotorcyclePartUseCase = new AddMotorcyclePartUseCase(this.motorcyclePartRepository);
    await addMotorcyclePartUseCase.execute(motorcyclePart);
  }

  async listMotorcycleParts(): Promise<MotorcyclePart[]> {
    const getAllMotorcyclePartsUseCase = new GetAllMotorcyclePartsUseCase(this.motorcyclePartRepository);
    return await getAllMotorcyclePartsUseCase.execute();
  }

  async updateMotorcyclePart(motorcyclePart: MotorcyclePart): Promise<void> {
    const updateMotorcyclePartUseCase = new UpdateMotorcyclePartUseCase(this.motorcyclePartRepository);
    await updateMotorcyclePartUseCase.execute(motorcyclePart);
  }

  async deleteMotorcyclePart(id: string): Promise<void> {
    const deleteMotorcyclePartUseCase = new DeleteMotorcyclePartUseCase(this.motorcyclePartRepository);
    await deleteMotorcyclePartUseCase.execute(id);
  }
}