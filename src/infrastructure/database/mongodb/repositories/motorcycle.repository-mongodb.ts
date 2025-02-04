import { Motorcycle } from "../../../../domain/entities/motorcycle.entity";
import { MotorcycleModel } from "../persistence/entities/motorcycle.entity-mongodb";
import { MotorcycleMapper } from "../persistence/mappers/motorcycle.mapper-mongodb";
import { IMotorcycleRepository } from "../../../../application/repositories/motorcycle.repository";
import { ObjectId } from "mongodb";

export class MotorcycleRepositoryMongoDB implements IMotorcycleRepository {
  async findById(id: string): Promise<Motorcycle | null> {
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid ObjectId format");
    }
    const motorcycleEntity = await MotorcycleModel.findOne({ _id: new ObjectId(id) });
    return motorcycleEntity ? MotorcycleMapper.toDomain(motorcycleEntity) : null;
  }

  async save(motorcycle: Motorcycle): Promise<Motorcycle> {
    const motorcycleEntity = MotorcycleMapper.toModel(motorcycle);
    const savedMotorcycleEntity = await motorcycleEntity.save();
    return MotorcycleMapper.toDomain(savedMotorcycleEntity);
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycleEntities = await MotorcycleModel.find();
    return await Promise.all(motorcycleEntities.map(MotorcycleMapper.toDomain)); // ✅ Correction ici
  }

  async update(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle> {
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid ObjectId format");
    }

    const updatedMotorcycleEntity = await MotorcycleModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { new: true }
    );

    if (!updatedMotorcycleEntity) {
      throw new Error("Motorcycle not found for update");
    }

    return MotorcycleMapper.toDomain(updatedMotorcycleEntity);
  }

  async remove(id: string): Promise<void> {
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid ObjectId format");
    }
    await MotorcycleModel.deleteOne({ _id: new ObjectId(id) });
  }
}
