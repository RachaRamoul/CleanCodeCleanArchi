import { Motorcycle } from "../../../../../../domain/entities/motorcycle.entity";
import { AddMotorcycleUseCase } from "../../../../../../application/usecases/motorcycle/add-motorcycle.usecase";
import { RemoveMotorcycleUseCase } from "../../../../../../application/usecases/motorcycle/remove-motorcycle.usecase";
import { GetMotorcycleByIdUseCase } from "../../../../../../application/usecases/motorcycle/get-motorcycle-by-id.usecase";
import { UpdateMotorcycleUseCase } from "../../../../../../application/usecases/motorcycle/update-motorcycle.usecase";
import { ListMotorcyclesUseCase } from "../../../../../../application/usecases/motorcycle/list-motorcycles.usecase";
import { repositories } from "../../../../../database/config/repository.config";
import Mileage from "../../../../../../domain/value-objects/mileage.vo";

export class MotorcycleService {
  constructor(private motorcycleRepository = repositories().MotorcycleRepository) {}

  async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    const getMotorcycleByIdUseCase = new GetMotorcycleByIdUseCase(this.motorcycleRepository);
    return await getMotorcycleByIdUseCase.execute(id);
  }

  async addMotorcycle(
    modelId: string,
    mileage: number,
    status: "AVAILABLE" | "IN_MAINTENANCE" | "RENTED" | "DECOMMISSIONED",
    companyId: string
  ): Promise<Motorcycle> {
    const mileageObject = new Mileage(mileage);
    const addMotorcycleUseCase = new AddMotorcycleUseCase(this.motorcycleRepository);
    return await addMotorcycleUseCase.execute(modelId, mileageObject, status, companyId);
  }

  async listMotorcycles(): Promise<Motorcycle[]> {
    const listMotorcyclesUseCase = new ListMotorcyclesUseCase(this.motorcycleRepository);
    return await listMotorcyclesUseCase.execute();
  }

  async updateMotorcycle(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle> {
    if (updateData.mileage && typeof updateData.mileage === "number") {
      updateData.mileage = new Mileage(updateData.mileage);
    }

    const updateMotorcycleUseCase = new UpdateMotorcycleUseCase(this.motorcycleRepository);
    return await updateMotorcycleUseCase.execute(id, updateData);
  }

  async deleteMotorcycle(id: string): Promise<void> {
    const removeMotorcycleUseCase = new RemoveMotorcycleUseCase(this.motorcycleRepository);
    await removeMotorcycleUseCase.execute(id);
  }
}