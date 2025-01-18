import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1737196997090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "userId",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "company_Id",
            type: "uuid", // UUID pour référencer une entreprise
          },
          {
            name: "nom",
            type: "varchar",
          },
          {
            name: "prenom",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true, // Contrainte d'unicité pour l'email
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "telephone",
            type: "varchar",
          },
          {
            name: "numeroSiret",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
