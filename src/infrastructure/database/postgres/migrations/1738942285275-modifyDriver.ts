import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyDriver1738942285275 implements MigrationInterface {
    name = 'ModifyDriver1738942285275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drivers" RENAME COLUMN "companyId" TO "company_id"`);
        await queryRunner.query(`ALTER TABLE "drivers" DROP COLUMN "company_id"`);
        await queryRunner.query(`ALTER TABLE "drivers" ADD "company_id" uuid`);
        await queryRunner.query(`ALTER TABLE "drivers" ADD CONSTRAINT "FK_2ffd7a9646568f60a28f25c5912" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drivers" DROP CONSTRAINT "FK_2ffd7a9646568f60a28f25c5912"`);
        await queryRunner.query(`ALTER TABLE "drivers" DROP COLUMN "company_id"`);
        await queryRunner.query(`ALTER TABLE "drivers" ADD "company_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "drivers" RENAME COLUMN "company_id" TO "companyId"`);
    }

}
