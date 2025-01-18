import mongoose, { Schema, Document } from 'mongoose';

export interface IIncidentReport extends Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  driverId: string;
  incidentType: string;
  description: string;
  isMotorcycleRideTest: boolean;
  date: Date;
}

const IncidentReportSchema: Schema<IIncidentReport> = new Schema<IIncidentReport>({
  id: { type: String, required: true, unique: true },
  driverId: { type: String, required: true },
  incidentType: { type: String, required: true },
  description: { type: String },
  isMotorcycleRideTest: { type: Boolean, required: true, default: false },
  date: { type: Date, required: true },
});

export const IncidentReportModel = mongoose.model<IIncidentReport>('IncidentReport', IncidentReportSchema);
