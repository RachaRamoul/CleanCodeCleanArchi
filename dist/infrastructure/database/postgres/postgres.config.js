"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
console.log('process.env.POSTGRES_URL :', process.env.POSTGRES_URL);
const postgresConfig = {
    type: 'postgres',
    url: process.env.POSTGRES_URL || '',
    entities: [__dirname + '/persistence/entities/*.entity-postgres.ts'],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
    logging: true,
    migrationsRun: true,
};
exports.default = postgresConfig;
