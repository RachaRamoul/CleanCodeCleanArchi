import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcycle extends Document {
  _id: mongoose.Types.ObjectId;
  modelId: mongoose.Types.ObjectId;  
  mileage: number;
  status: 'AVAILABLE' | 'IN_MAINTENANCE' | 'RENTED' | 'DECOMMISSIONED';
  companyId: mongoose.Types.ObjectId;
}

const MotorcycleSchema: Schema<IMotorcycle> = new Schema<IMotorcycle>(
  {
    modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', required: true },
    mileage: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ['AVAILABLE', 'IN_MAINTENANCE', 'RENTED', 'DECOMMISSIONED'],
      default: 'AVAILABLE',
    },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  { timestamps: true }
);


MotorcycleSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

export const MotorcycleModel = mongoose.model<IMotorcycle>('Motorcycle', MotorcycleSchema);