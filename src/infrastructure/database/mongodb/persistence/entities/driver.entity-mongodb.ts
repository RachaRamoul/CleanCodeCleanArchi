import mongoose, { Schema, Document } from 'mongoose';

export interface IDriver extends Document {
  _id: mongoose.Types.ObjectId;
  driverId: string;
  companyId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  experienceYears: number;
  incidentHistory: string; // Path to an image or PDF
}

const DriverSchema: Schema<IDriver> = new Schema<IDriver>({
  driverId: { type: String, required: true, unique: true },
  companyId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  experienceYears: { type: Number, required: true },
  incidentHistory: { type: String, required: true },
});

export const DriverModel = mongoose.model<IDriver>('Driver', DriverSchema);
