import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModel1737197751686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "models",
        columns: [
          {
            name: "modelId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "manufacturer",
            type: "varchar",
          },
          {
            name: "maintenanceFrequency",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("models");
  }
}
