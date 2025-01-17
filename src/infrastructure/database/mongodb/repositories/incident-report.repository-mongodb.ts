import { IncidentReport } from '../../../../domain/entities/incident-report.entity';
import { IncidentReportModel } from '../persistence/entities/incident-report.entity-mongodb'; 
import { IncidentReportMapper } from '../persistence/mappers/incident-report.mapper-mongodb'; 
import { IIncidentReportRepository } from '../../../../application/repositories/incident-report.repository';
import { ObjectId } from 'mongodb';

export class MongoIncidentReportRepository implements IIncidentReportRepository {

  async findById(id: string): Promise<IncidentReport | null> {
    const incidentReportEntity = await IncidentReportModel.findOne({ _id: new ObjectId(id) });
    return incidentReportEntity ? IncidentReportMapper.toDomain(incidentReportEntity) : null;
  }

  async save(incidentReport: IncidentReport): Promise<IncidentReport> {
    const incidentReportEntity = IncidentReportMapper.toModel(incidentReport);
    const savedIncidentReportEntity = await incidentReportEntity.save();
    return IncidentReportMapper.toDomain(savedIncidentReportEntity);
  }

  async listIncidentReports(): Promise<IncidentReport[]> {
    const incidentReportEntities = await IncidentReportModel.find();
    return incidentReportEntities.map((incidentReportEntity) => IncidentReportMapper.toDomain(incidentReportEntity));
  }

  async removeIncidentReport(id: string): Promise<void> {
    await IncidentReportModel.deleteOne({ _id: new ObjectId(id) });
  }
}
