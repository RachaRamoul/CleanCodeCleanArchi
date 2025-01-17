import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { IncidentReportPostgresEntity } from '../persistence/entities/incident-report.entity-postgres';

export class IncidentReportRepositoryPostgres {
  private repository: Repository<IncidentReportPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(IncidentReportPostgresEntity);
  }

  async create(incidentReport: IncidentReportPostgresEntity): Promise<IncidentReportPostgresEntity> {
    return this.repository.save(incidentReport);
  }

  async findById(incidentReportId: string): Promise<IncidentReportPostgresEntity | null> {
    return this.repository.findOneBy({ incidentReportId });
  }

  async findAll(): Promise<IncidentReportPostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    incidentReportId: string,
    updateData: Partial<IncidentReportPostgresEntity>
  ): Promise<void> {
    await this.repository.update(incidentReportId, updateData);
  }

  async delete(incidentReportId: string): Promise<void> {
    await this.repository.delete(incidentReportId);
  }
}
