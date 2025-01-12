import mongoose, { Schema, Document } from 'mongoose';

// Interface représentant une moto dans MongoDB
export interface IMotorcycle extends Document {
  _id: mongoose.Types.ObjectId; // Identifiant unique MongoDB
  motorcycleId: string; // Identifiant métier de la moto
  modelId: string; // Identifiant du modèle
  mileage: number; // Kilométrage
  status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED'; // Statut de la moto
  companyId: string; // Identifiant de la compagnie
}

// Schéma MongoDB pour une moto
const MotorcycleSchema: Schema = new Schema<IMotorcycle>({
  motorcycleId: { type: String, required: true },
  modelId: { type: String, required: true },
  mileage: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['AVAILABLE', 'IN_MAINTENANCE', 'RENTED', 'DECOMMISSIONED'], 
    required: true 
  },
  companyId: { type: String, required: true },
});

// Modèle Mongoose pour interagir avec MongoDB
export const MotorcycleModel = mongoose.model<IMotorcycle>('Motorcycle', MotorcycleSchema);
