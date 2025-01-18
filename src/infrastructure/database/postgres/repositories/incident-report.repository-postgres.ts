import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import { IncidentReportPostgresEntity } from '../persistence/entities/incident-report.entity-postgres';
import { IIncidentReportRepository } from '../../../../application/repositories/incident-report.repository';

export class IncidentReportRepositoryPostgres implements IIncidentReportRepository{
  private repository: Repository<IncidentReportPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(IncidentReportPostgresEntity);
  }

  async create(incidentReport: IncidentReportPostgresEntity): Promise<IncidentReportPostgresEntity> {
    return this.repository.save(incidentReport);
  }

  async findById(id: string): Promise<IncidentReportPostgresEntity | null> {
    return this.repository.findOneBy({ id });
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
