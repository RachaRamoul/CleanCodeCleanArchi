// infrastructure/database/mongodb/persistence/entities/model.mongo.entity.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface IModel extends Document {
  modelId: string;
  name: string;
  manufacturer: string;  // Ajoutez la propriété manufacturer ici
  maintenanceFrequency: number;
}

const ModelSchema: Schema<IModel> = new Schema<IModel>({
  modelId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },  // Ajoutez la définition de la propriété manufacturer ici
  maintenanceFrequency: { type: Number, required: true },
});

export const ModelModel = mongoose.model<IModel>('Model', ModelSchema);
