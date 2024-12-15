import { DataSourceOptions } from 'typeorm';
require('dotenv').config();

console.log('process.env.MONGO_URL :', process.env.MONGO_URL);

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
