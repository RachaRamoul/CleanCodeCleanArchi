import { DataSource } from 'typeorm';
import { getDataSourceOptions } from './typeorm.config';

export const AppDataSource = new DataSource(getDataSourceOptions());

export const initializeDB = async () => {
    try {
      await AppDataSource.initialize();
      console.log('Entities:', AppDataSource.entityMetadatas.map((meta) => meta.name));
      console.log('Data Source has been initialized!');
    } catch (error) {
      console.error('Error during Data Source initialization:', error);
      process.exit(1);
    }
  }
  