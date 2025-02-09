import { Motorcycle } from "../../../../domain/entities/motorcycle.entity";
import { MotorcycleModel } from "../persistence/entities/motorcycle.entity-mongodb";
import { MotorcycleMapper } from "../persistence/mappers/motorcycle.mapper-mongodb";
import { IMotorcycleRepository } from "../../../../application/repositories/motorcycle.repository";
import mongoose from "mongoose";
import Mileage from "../../../../domain/value-objects/mileage.vo";

export class MotorcycleRepositoryMongoDB implements IMotorcycleRepository {
  async findById(id: string): Promise<Motorcycle | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId format: ${id}`);
    }
    const motorcycleEntity = await MotorcycleModel.findById(id);
    return motorcycleEntity ? MotorcycleMapper.toDomain(motorcycleEntity) : null;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    if (!mongoose.Types.ObjectId.isValid(motorcycle.modelId)) {
      throw new Error(`Invalid modelId: ${motorcycle.modelId}`);
    }
    if (!mongoose.Types.ObjectId.isValid(motorcycle.companyId)) {
      throw new Error(`Invalid companyId: ${motorcycle.companyId}`);
    }

    const entityData = MotorcycleMapper.toModel(motorcycle);
    const motorcycleEntity = new MotorcycleModel(entityData);
    const savedMotorcycleEntity = await motorcycleEntity.save();
    return MotorcycleMapper.toDomain(savedMotorcycleEntity);
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycles = await MotorcycleModel.find();
    return motorcycles.map(MotorcycleMapper.toDomain);
  }

  async update(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId format: ${id}`);
    }
    if (updateData.mileage && typeof updateData.mileage === "number") {
      updateData.mileage = new Mileage(updateData.mileage);
    }
    const updateFields = MotorcycleMapper.toModel(updateData as Motorcycle);
    delete updateFields._id;
  
    const updatedMotorcycleEntity = await MotorcycleModel.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    );
  
    if (!updatedMotorcycleEntity) {
      throw new Error("Motorcycle not found");
    }
  
    return MotorcycleMapper.toDomain(updatedMotorcycleEntity);
  }

  async remove(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(`Invalid ObjectId format: ${id}`);
    }
    await MotorcycleModel.findByIdAndDelete(id);
  }
}