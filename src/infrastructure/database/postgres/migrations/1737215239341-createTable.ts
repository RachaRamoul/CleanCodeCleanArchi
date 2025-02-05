import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompany1737215239341 implements MigrationInterface {
    name = 'CreateCompany1737215239341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "motorcycles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelId" character varying NOT NULL, "mileage" integer NOT NULL, "status" character varying NOT NULL, "companyId" character varying NOT NULL, CONSTRAINT "PK_6e34aca06f3000916257494a4aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "motorcycle_part_orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "motorcyclePartId" character varying NOT NULL, "cost" numeric NOT NULL, "orderDate" TIMESTAMP NOT NULL, "deliveryDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_aeb88bfe5d808ba00c290c96ed9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "motorcycle_ride_tests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "motorcycleId" character varying NOT NULL, "driverId" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "testDuration" integer NOT NULL, "incidentReportId" character varying NOT NULL, CONSTRAINT "PK_f8a5c3a8dde94883ad96462cbea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "manufacturer" character varying NOT NULL, "maintenanceFrequency" integer NOT NULL, CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "maintenances" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "motorcycleId" character varying NOT NULL, "partId" character varying NOT NULL, "maintenanceType" character varying NOT NULL, "recommendations" character varying NOT NULL, "cost" numeric NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_62403473bd524a42d58589aa78b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "incident_reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "driverId" character varying NOT NULL, "incidentType" character varying NOT NULL, "description" character varying NOT NULL, "isMotorcycleRideTest" boolean NOT NULL DEFAULT false, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_8b924dea33e3dd1ef1bbac02ad6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "drivers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "companyId" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "licenseNumber" character varying NOT NULL, "experienceYears" integer NOT NULL, CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "number" character varying NOT NULL, "siretNumber" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
        await queryRunner.query(`DROP TABLE "incident_reports"`);
        await queryRunner.query(`DROP TABLE "maintenances"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TABLE "motorcycle_ride_tests"`);
        await queryRunner.query(`DROP TABLE "motorcycle_part_orders"`);
        await queryRunner.query(`DROP TABLE "motorcycle_parts"`);
    }
}