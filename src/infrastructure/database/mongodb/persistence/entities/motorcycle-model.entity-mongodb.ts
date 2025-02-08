import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcycleModel extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  name: string;
  maintenanceFrequencyInKilometers: number;
}

const ModelSchema: Schema<IMotorcycleModel> = new Schema<IMotorcycleModel>({
  name: { type: String, required: true, unique: true },
  maintenanceFrequencyInKilometers: { type: Number, required: true },
});

export const MotorcycleModelModel = mongoose.model<IMotorcycleModel>('MotorcycleModel', ModelSchema);
