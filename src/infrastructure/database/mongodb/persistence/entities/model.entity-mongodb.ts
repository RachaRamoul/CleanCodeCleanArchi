import mongoose, { Schema, Document } from 'mongoose';

export interface IModel extends Document {
  id: string;
  name: string;
  manufacturer: string; 
  maintenanceFrequency: number;
}

const ModelSchema: Schema<IModel> = new Schema<IModel>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },  
  maintenanceFrequency: { type: Number, required: true },
});

export const ModelModel = mongoose.model<IModel>('Model', ModelSchema);
