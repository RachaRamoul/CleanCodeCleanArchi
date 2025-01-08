"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoConfig = {
    type: 'mongodb',
    url: process.env.MONGO_URL || '',
    useUnifiedTopology: true,
    entities: [__dirname + '/persistence/entities/*.entity-mongodb.ts'],
    synchronize: false,
    logging: true,
    migrationsRun: false,
};
exports.default = mongoConfig;
