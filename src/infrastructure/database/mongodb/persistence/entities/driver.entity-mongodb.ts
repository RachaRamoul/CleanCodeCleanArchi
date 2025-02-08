import mongoose, { Schema, Document } from 'mongoose';

export interface IDriver extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  companyId: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  experienceYears: number;
}

const DriverSchema: Schema<IDriver> = new Schema<IDriver>({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  experienceYears: { type: Number, required: true },
});

export const DriverModel = mongoose.model<IDriver>('Driver', DriverSchema);
