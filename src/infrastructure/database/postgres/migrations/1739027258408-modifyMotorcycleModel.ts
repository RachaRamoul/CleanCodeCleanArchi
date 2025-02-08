import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyMotorcycleModel1739027258408 implements MigrationInterface {
    name = 'ModifyMotorcycleModel1739027258408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "motorcycle_ride_tests" RENAME COLUMN "testDuration" TO "testDurationInHours"`);
        await queryRunner.query(`ALTER TABLE "models" DROP COLUMN "maintenanceFrequency"`);
        await queryRunner.query(`ALTER TABLE "models" DROP COLUMN "manufacturer"`);
        await queryRunner.query(`ALTER TABLE "models" ADD "maintenanceFrequencyInKilometers" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "models" DROP COLUMN "maintenanceFrequencyInKilometers"`);
        await queryRunner.query(`ALTER TABLE "models" ADD "manufacturer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "models" ADD "maintenanceFrequency" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "motorcycle_ride_tests" RENAME COLUMN "testDurationInHours" TO "testDuration"`);
    }

}
