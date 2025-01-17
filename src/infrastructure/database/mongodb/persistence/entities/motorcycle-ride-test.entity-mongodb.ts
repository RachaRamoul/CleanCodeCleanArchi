import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcycleRideTest extends Document {
  _id: mongoose.Types.ObjectId;
  motorcycleRideTestId: string;
  motorcycleId: string;
  driverId: string;
  date: Date;
  testDuration: number;
  incidentReport: string;
}

const MotorcycleRideTestSchema: Schema<IMotorcycleRideTest> = new Schema<IMotorcycleRideTest>({
  motorcycleRideTestId: { type: String, required: true, unique: true },
  motorcycleId: { type: String, required: true },
  driverId: { type: String, required: true },
  date: { type: Date, required: true },
  testDuration: { type: Number, required: true },
  incidentReport: { type: String, required: true },
});

export const MotorcycleRideTestModel = mongoose.model<IMotorcycleRideTest>('MotorcycleRideTest', MotorcycleRideTestSchema);
