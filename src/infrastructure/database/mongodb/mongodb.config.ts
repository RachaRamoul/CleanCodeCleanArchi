import { DataSourceOptions } from 'typeorm';
require('dotenv').config();

const mongoConfig: DataSourceOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URL || '',
  useUnifiedTopology: true,
  entities: [__dirname + '/persistence/entities/*.entity-mongodb.ts'],
  synchronize: false,
  logging: true,
  migrationsRun: false,
};

export default mongoConfig;
