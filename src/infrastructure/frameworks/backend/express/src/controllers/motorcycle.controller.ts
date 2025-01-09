import { Request, Response } from 'express';
import { AddMotorcycleUseCase } from '../../../../../../application/usecases/add-motorcycle.usecase';
import { ListMotorcyclesUseCase } from '../../../../../../application/usecases/list-motorcycles.usecase';
import { repositories } from '../../../../../database/config/repository.config';

const { MotorcycleRepository } = repositories();
const motorcycleRepository = new MotorcycleRepository();
const addMotorcycleUseCase = new AddMotorcycleUseCase(motorcycleRepository);
const listMotorcyclesUseCase = new ListMotorcyclesUseCase(motorcycleRepository);

export const addMotorcycle = async (req: Request, res: Response) => {
  const { modelId, mileage, status, companyId } = req.body;
  await addMotorcycleUseCase.execute(modelId, mileage, status, companyId);
  res.status(201).send('Motorcycle added');
};

export const listMotorcycles = async (req: Request, res: Response) => {
  const motorcycles = await listMotorcyclesUseCase.execute();
  res.json(motorcycles);
};
