import mongoose, { Schema, Document } from 'mongoose';

export interface IIncidentReport extends Document {
  _id: mongoose.Types.ObjectId;
  incidentReportId: string;
  incidentType: string;
  description: string;
  date: Date;
}

const IncidentReportSchema: Schema<IIncidentReport> = new Schema<IIncidentReport>({
  incidentReportId: { type: String, required: true, unique: true },
  incidentType: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

export const IncidentReportModel = mongoose.model<IIncidentReport>('IncidentReport', IncidentReportSchema);
