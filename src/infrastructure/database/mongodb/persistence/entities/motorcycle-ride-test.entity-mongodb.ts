import mongoose, { Schema, Document } from 'mongoose';

export interface IMotorcycleRideTest extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  motorcycleId: mongoose.Types.ObjectId;
  driverId: mongoose.Types.ObjectId;
  date: Date;
  testDurationInHours: number;
  incidentReportId: mongoose.Types.ObjectId;
}

const MotorcycleRideTestSchema: Schema<IMotorcycleRideTest> = new Schema<IMotorcycleRideTest>({
  id: { type: String, required: true, unique: true },
  motorcycleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Motorcycle', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  date: { type: Date, required: true },
  testDurationInHours: { type: Number, required: true },
  incidentReportId: { type: mongoose.Schema.Types.ObjectId, ref: 'IncidentReport', required: true },
});

export const MotorcycleRideTestModel = mongoose.model<IMotorcycleRideTest>('MotorcycleRideTest', MotorcycleRideTestSchema);
