import { Request, Response } from 'express';
import { MotorcycleModelService } from '../services/motorcycle-model.service';
import { MotorcycleModel } from '../../../../../../domain/entities/motorcycle-model.entity';

const motorcycleModelService = new MotorcycleModelService();

export const addMotorcycleModel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, maintenanceFrequencyInKilometers } = req.body;
    const newMotorcycleModel = await motorcycleModelService.addMotorcycleModel(name, maintenanceFrequencyInKilometers);
    
    res.status(201).json(newMotorcycleModel);

  } catch (error) {
    console.error('Error creating motorcycle model:', error);
    res.status(400).json({ error: error.message });
  }
};

export const getMotorcycleModelById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const motorcycleModel = await motorcycleModelService.getMotorcycleModelById(id);

    if (!motorcycleModel) {
      res.status(404).json({ message: 'Motorcycle model not found' });
      return;
    }
    res.status(200).json(motorcycleModel);

  } catch (error) {
    console.error('Error fetching motorcycle model by ID:', error);
    res.status(400).json({ error: error.message });
  }
};

export const getMotorcycleModelByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query as { name: string };
    const motorcycleModel = await motorcycleModelService.getMotorcycleModelByName(name);

    if (!motorcycleModel) {
      res.status(404).json({ message: 'Motorcycle model not found' });
      return;
    }
    res.status(200).json(motorcycleModel);

  } catch (error) {
    console.error('Error fetching motorcycle model by name:', error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllMotorcycleModels = async (req: Request, res: Response): Promise<void> => {
  try {
    const motorcycleModels = await motorcycleModelService.listMotorcycleModels();
    res.status(200).json(motorcycleModels);

  } catch (error) {
    console.error('Error listing motorcycle models:', error);
    res.status(400).json({ error: error.message });
  }
};

export const updateMotorcycleModel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body as Partial<MotorcycleModel>;

    const updatedMotorcycleModel = await motorcycleModelService.updateMotorcycleModel(id, updateData);
    
    res.status(200).json(updatedMotorcycleModel);

  } catch (error) {
    console.error('Error updating motorcycle model:', error);
    res.status(400).json({ error: error.message });
  }
};

export const deleteMotorcycleModel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await motorcycleModelService.deleteMotorcycleModel(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting motorcycle model:', error);
    res.status(400).json({ error: error.message });
  }
};
