import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcycleDocument extends Document {
  motorcycleId: string;
  modelId: string;
  mileage: number;
  status: string;
  companyId: string;
}

const MotorcycleSchema: Schema = new Schema({
  motorcycleId: { type: String, required: true },
  modelId: { type: String, required: true },
  mileage: { type: Number, required: true },
  status: { type: String, enum: ['AVAILABLE', 'EN MAINTENANCE', 'LOUÉ', 'DECOMMISSIONED'], required: true },
  companyId: { type: String, required: true },
});

export const MotorcycleModel = mongoose.model<IMotorcycleDocument>('Motorcycle', MotorcycleSchema);
