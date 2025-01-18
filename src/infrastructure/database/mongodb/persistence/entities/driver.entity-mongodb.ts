import mongoose, { Schema, Document } from 'mongoose';

export interface IDriver extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  companyId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  experienceYears: number;
}

const DriverSchema: Schema<IDriver> = new Schema<IDriver>({
  id: { type: String, required: true, unique: true },
  companyId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  experienceYears: { type: Number },
});

export const DriverModel = mongoose.model<IDriver>('Driver', DriverSchema);
