import { Request, Response } from 'express';
import { addMotorcycle, listMotorcycles } from '../services/motorcycle.service';

export const createMotorcycle = async (req: Request, res: Response) => {
  try {
    const { modelId, mileage, status, companyId } = req.body;

    await addMotorcycle({ modelId, mileage, status, companyId });
    res.status(201).json({ message: 'Motorcycle added successfully' });
  } catch (error) {
    console.error('Error creating motorcycle:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllMotorcycles = async (_req: Request, res: Response) => {
  try {
    const motorcycles = await listMotorcycles();
    res.status(200).json(motorcycles);
  } catch (error) {
    console.error('Error fetching motorcycles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
