import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcyclePart extends Document {
  _id: mongoose.Types.ObjectId;
  partId: string;
  name: string;
  description?: string;
  stockQuantity: number;
  cost: number;
  lowStockAlert: boolean;
}

const MotorcyclePartSchema: Schema<IMotorcyclePart> = new Schema<IMotorcyclePart>({
  partId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  stockQuantity: { type: Number, required: true },
  cost: { type: Number, required: true },
  lowStockAlert: { type: Boolean, required: true },
});

export const MotorcyclePartModel = mongoose.model<IMotorcyclePart>('MotorcyclePart', MotorcyclePartSchema);
