import mongoose, { Schema, Document } from 'mongoose';

export interface IMaintenance extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  motorcycleId: string;
  partId: string;
  maintenanceType: string;
  recommendations: string;
  cost: number;
  date: Date;
}

const MaintenanceSchema: Schema<IMaintenance> = new Schema<IMaintenance>({
  id: { type: String, required: true, unique: true },
  motorcycleId: { type: String, required: true },
  partId: { type: String, required: true },
  maintenanceType: { type: String, required: true },
  recommendations: { type: String, required: true },
  cost: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const MaintenanceModel = mongoose.model<IMaintenance>('Maintenance', MaintenanceSchema);
