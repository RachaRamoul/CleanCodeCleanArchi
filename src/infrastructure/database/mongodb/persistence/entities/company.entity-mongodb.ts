import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  _id: mongoose.Types.ObjectId;
  companyId: string;
  name: string;
  email: string;
  number: string;
  siretNumber: string;
  password: string;
}

const CompanySchema: Schema<ICompany> = new Schema<ICompany>({
  companyId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  siretNumber: { type: String, required: true },
});

export const CompanyModel = mongoose.model<ICompany>('Company', CompanySchema);
