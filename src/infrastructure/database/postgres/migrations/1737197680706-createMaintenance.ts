import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMaintenance1737197680706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "maintenances",
        columns: [
          {
            name: "maintenanceId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "motorcycleId",
            type: "uuid",
          },
          {
            name: "partId",
            type: "uuid",
          },
          {
            name: "maintenanceType",
            type: "varchar",
          },
          {
            name: "recommendations",
            type: "text",
          },
          {
            name: "cost",
            type: "decimal",
            precision: 10,
            scale: 2,
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
    await queryRunner.dropTable("maintenances");
  }
}
