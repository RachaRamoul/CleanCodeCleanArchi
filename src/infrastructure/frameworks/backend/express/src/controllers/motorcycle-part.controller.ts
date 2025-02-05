import { Request, Response } from 'express';
import { MotorcyclePartService } from '../services/motorcycle-part.service';
import { repositories } from '../../../../../database/config/repository.config';

const { MotorcyclePartRepository } = repositories();
const motorcyclePartService = new MotorcyclePartService(MotorcyclePartRepository);

export const getMotorcyclePartById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const part = await motorcyclePartService.getMotorcyclePartById(id);

    if (!part) {
      res.status(404).json({ message: 'Motorcycle part not found' });
      return;
    }
    res.status(200).json(part);
  } catch (error) {
    console.error('Error fetching motorcycle part by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createMotorcyclePart = async (req: Request, res: Response) => {
  try {
    const partData = req.body;
    await motorcyclePartService.addMotorcyclePart(partData);
    res.status(201).json({ message: 'Motorcycle part created successfully' });
  } catch (error) {
    console.error('Error creating motorcycle part:', error);
    res.status(400).json({ message: error.message });
  }
};

export const getAllMotorcycleParts = async (_req: Request, res: Response) => {
  try {
    const parts = await motorcyclePartService.listMotorcycleParts();
    res.status(200).json(parts);
  } catch (error) {
    console.error('Error fetching motorcycle parts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateMotorcyclePart = async (req: Request, res: Response) => {
  try {
    const partData = { id: req.params.id, ...req.body };
    await motorcyclePartService.updateMotorcyclePart(partData);
    res.status(200).json({ message: 'Motorcycle part updated successfully' });
  } catch (error) {
    console.error('Error updating motorcycle part:', error);
    res.status(error.message === 'Motorcycle part not found' ? 404 : 400).json({ message: error.message });
  }
};

export const deleteMotorcyclePart = async (req: Request, res: Response) => {
  try {
    await motorcyclePartService.deleteMotorcyclePart(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting motorcycle part:', error);
    res.status(error.message === 'Motorcycle part not found' ? 404 : 500).json({ message: error.message });
  }
};