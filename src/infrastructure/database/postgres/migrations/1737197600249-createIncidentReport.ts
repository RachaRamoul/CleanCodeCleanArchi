import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateIncidentReport1737197600249 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "incident_reports",
        columns: [
          {
            name: "incidentReportId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "incidentType",
            type: "varchar",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "date",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("incident_reports");
  }
}
