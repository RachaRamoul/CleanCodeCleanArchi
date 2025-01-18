import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcyclePart extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  name: string;
  description?: string;
  stockQuantity: number;
  cost: number;
  lowStockAlert: number;
}

const MotorcyclePartSchema: Schema<IMotorcyclePart> = new Schema<IMotorcyclePart>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  stockQuantity: { type: Number, required: true },
  cost: { type: Number, required: true },
  lowStockAlert: { type: Number, required: true },
});

export const MotorcyclePartModel = mongoose.model<IMotorcyclePart>('MotorcyclePart', MotorcyclePartSchema);
