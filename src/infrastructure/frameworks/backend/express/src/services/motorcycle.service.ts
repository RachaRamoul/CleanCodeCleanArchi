import { AppDataSource } from "../../../../../../infrastructure/database/postgres/postgres.config";
import { MotorcyclePostgresEntity } from "../../../../../../infrastructure/database/postgres/persistence/entities/motorcycle.entity-postgres";
import { MotorcycleRepositoryPostgres } from "../../../../../../infrastructure/database/postgres/repositories/motorcycle.repository-postgres";
import { ListMotorcyclesUseCase } from "../../../../../../application/usecases/motorcycle/list-motorcycles.usecase";
import { AddMotorcycleUseCase } from "../../../../../../application/usecases/motorcycle/add-motorcycle.usecase";
import { v4 as uuidv4 } from 'uuid';

// Créez le repository
const repository = new MotorcycleRepositoryPostgres(
  AppDataSource.getRepository(MotorcyclePostgresEntity)
);

// Fonction pour lister les motos
export const listMotorcycles = async () => {
  const useCase = new ListMotorcyclesUseCase(repository);
  return await useCase.execute();
};

// Fonction pour ajouter une moto
export const addMotorcycle = async (data: {
  modelId: string;
  mileage: number;
  status: "AVAILABLE" | "IN_MAINTENANCE" | "RENTED" | "DECOMMISSIONED";
  companyId: string;
}) => {
  const useCase = new AddMotorcycleUseCase(repository);
  const motorcycleId = uuidv4();
  return await useCase.execute(motorcycleId, data.modelId, data.mileage, data.status, data.companyId);
};
