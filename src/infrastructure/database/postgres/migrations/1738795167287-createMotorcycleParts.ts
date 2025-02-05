import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMotorcycleParts1738795167287 implements MigrationInterface {
    name = 'CreateMotorcycleParts1738795167287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "motorcycle_parts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "stockQuantity" integer NOT NULL, "cost" numeric NOT NULL, "lowStockAlert" integer NOT NULL, CONSTRAINT "PK_27ab310e48159b774b544ef3fe2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "motorcycle_parts"`);
    }

}
