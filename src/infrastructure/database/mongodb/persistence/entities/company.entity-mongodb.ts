import mongoose, { Schema, Document, CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

export interface ICompany extends Document {
  _id: mongoose.Types.ObjectId;
  companyId: string;
  name: string;
  email: string;
  number: string;
  siretNumber: string;
  isAdmin: boolean;
  password: string;
}

const CompanySchema: Schema<ICompany> = new Schema<ICompany>({
  companyId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  siretNumber: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  password: { type: String, required: true },
});

CompanySchema.pre<ICompany>('save', async function (next) {
  const company = this; 

  if (!company.isModified('password')) {
    return next();
  }
  if (company.password.length < 8) {
    return next(new Error('Password must be at least 8 characters long.'));
  }
  try {
    const hashedPassword = await bcrypt.hash(company.password, 10);
    company.password = hashedPassword; 
    next(); 
  } catch (error: unknown) {
    next(error as CallbackError); 
  }
});

export const CompanyModel = mongoose.model<ICompany>('Company', CompanySchema);
