import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDriver1737197546422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "drivers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "firstName",
            type: "varchar",
          },
          {
            name: "lastName",
            type: "varchar",
          },
          {
            name: "licenseNumber",
            type: "varchar",
          },
          {
            name: "experienceYears",
            type: "int",
          },
          {
            name: "incidentHistory",
            type: "text",
            isArray: true, 
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("drivers");
  }
}
