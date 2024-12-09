import { DataSourceOptions } from 'typeorm';
require('dotenv').config();
console.log('process.env.POSTGRES_URL :', process.env.POSTGRES_URL);

const postgresConfig: DataSourceOptions = {
    type: 'postgres',
    url: process.env.POSTGRES_URL || '',
    entities: [__dirname + '/persistence/entities/*.entity-postgres.ts'],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
    logging: true,
    migrationsRun: true,
  };
  
export default postgresConfig;
