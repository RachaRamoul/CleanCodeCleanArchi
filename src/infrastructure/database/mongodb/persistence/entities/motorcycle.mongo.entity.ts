import mongoose, { Schema, Document } from 'mongoose';
import { IModel } from './model.mongo.entity';  // Importer l'entité Model
import { ICompany } from './company.entity-mongodb';  // Importer l'entité Company

export interface IMotorcycle extends Document {
  _id: mongoose.Types.ObjectId;
  motorcycleId: string;
  modelId: mongoose.Types.ObjectId;  // Référence à l'ID de 'Model'
  mileage: number;
  status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED';
  companyId: mongoose.Types.ObjectId;  // Référence à l'ID de 'Company'
}

const MotorcycleSchema: Schema<IMotorcycle> = new Schema<IMotorcycle>({
  motorcycleId: { type: String, required: true, unique: true },
  modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: true },
  mileage: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ['AVAILABLE', 'IN_MAINTENANCE', 'RENTED', 'DECOMMISSIONED'],
    default: 'AVAILABLE',
  },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
});

export const MotorcycleModel = mongoose.model<IMotorcycle>('Motorcycle', MotorcycleSchema);
