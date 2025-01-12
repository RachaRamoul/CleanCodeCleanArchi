"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1728901017165 = void 0;
class CreateUser1728901017165 {
    constructor() {
        this.name = 'CreateUser1728901017165';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUser1728901017165 = CreateUser1728901017165;
