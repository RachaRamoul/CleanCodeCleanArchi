import mongoose, { Schema, Document, CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  siretNumber: string;
  type: string; 
  password: string; 
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
  companyId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  siretNumber: { type: String, required: true },
  type: { type: String, required: true }, 
  password: { type: String, required: true }, 
});

UserSchema.pre<IUser>('save', async function (next) {
  const user = this; 

  if (!user.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword; 
    next(); 
  } catch (error: unknown) {
    next(error as CallbackError); 
  }
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
