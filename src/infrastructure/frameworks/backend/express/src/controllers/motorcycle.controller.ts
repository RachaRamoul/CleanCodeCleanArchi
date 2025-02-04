import { Request, Response } from "express";
import { MotorcycleService } from "../services/motorcycle.service";
import { repositories } from "../../../../../database/config/repository.config";

const { MotorcycleRepository } = repositories();
const motorcycleService = new MotorcycleService(MotorcycleRepository);

export const getMotorcycleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const motorcycle = await motorcycleService.getMotorcycleById(id);

    if (!motorcycle) {
      res.status(404).json({ message: "Motorcycle not found" });
      return;
    }
    res.status(200).json(motorcycle);
  } catch (error) {
    console.error("Error fetching motorcycle by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createMotorcycle = async (req: Request, res: Response) => {
  try {
    const { modelId, mileage, status, companyId } = req.body;
    const motorcycle = await motorcycleService.addMotorcycle(modelId, mileage, status, companyId);

    res.status(201).json(motorcycle);
  } catch (error) {
    console.error("Error creating motorcycle:", error);
    res.status(400).json({ message: error.message });
  }
};

export const getAllMotorcycles = async (_req: Request, res: Response) => {
  try {
    const motorcycles = await motorcycleService.listMotorcycles();
    res.status(200).json(motorcycles);
  } catch (error) {
    console.error("Error fetching motorcycles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateMotorcycle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedMotorcycle = await motorcycleService.updateMotorcycle(id, updateData);

    if (!updatedMotorcycle) {
      res.status(404).json({ message: "Motorcycle not found" });
      return;
    }

    res.status(200).json(updatedMotorcycle);
  } catch (error) {
    console.error("Error updating motorcycle:", error);

    if (error.message === "Motorcycle not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

export const deleteMotorcycle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await motorcycleService.deleteMotorcycle(id);
    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting motorcycle:", error);

    if (error.message === "Motorcycle not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};