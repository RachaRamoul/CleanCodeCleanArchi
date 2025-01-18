import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcyclePartOrder extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  motorcyclePartId: string;
  orderDate: Date;
  cost: number;
  deliveryDate: Date;
}

const MotorcyclePartOrderSchema: Schema<IMotorcyclePartOrder> = new Schema<IMotorcyclePartOrder>({
  id: { type: String, required: true, unique: true },
  motorcyclePartId: { type: String, required: true },
  orderDate: { type: Date, required: true },
  cost: { type: Number, required: true },
  deliveryDate: { type: Date, required: true },
});

export const MotorcyclePartOrderModel = mongoose.model<IMotorcyclePartOrder>('MotorcyclePartOrder', MotorcyclePartOrderSchema);
