import { DataSourceOptions } from 'typeorm';

export const getDataSourceOptions = (): DataSourceOptions => {
  require('dotenv').config();
  const DB_TYPE = process.env.DB_TYPE;
  console.log("DB TYPE :", DB_TYPE);

  const commonConfig = {
    synchronize: false,
    logging: true,
    entities: ['src/infrastructure/persistence/entities/*.entity-persistence.ts'],
    migrationsRun: true
  };

  if (DB_TYPE === 'postgres') {
    return {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      migrations: ['src/infrastructure/migrations/postgres/*.ts'],
      ...commonConfig,
    };
  } else if (DB_TYPE === 'mongodb') {
    return {
      type: 'mongodb',
      url: process.env.MONGO_URL,
      useUnifiedTopology: true,
      ...commonConfig,
    };
  }

  throw new Error('DB_TYPE non supporté');
};
