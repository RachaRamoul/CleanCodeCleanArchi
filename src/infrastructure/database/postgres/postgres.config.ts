import { DataSourceOptions, DataSource } from 'typeorm';
import config from '../config/config';

let AppDataSource: DataSource;

try {
    const postgresConfig: DataSourceOptions = {
      type: 'postgres',
      url: config.postgresURL,
      entities: [__dirname + '/persistence/entities/*.entity-postgres.ts'],
      migrations: [__dirname + '/migrations/*.ts'],
      synchronize: false,
      logging: true,
      migrationsRun: true,
    };

    if ( !postgresConfig ) throw new Error(`The database ${config.dbType} is not supported`);
  
    AppDataSource = new DataSource(postgresConfig);

}catch(error){
  throw new Error(`Error loading configuration file for database :  ${error}`);
}

const connectPostgres = async () => {
    try {
      await AppDataSource.initialize();
    } catch (error) {
      console.error('Error during Data Source initialization:', error);
      process.exit(1);
    }
}

const closePostgres = async () => {
  try {
      await AppDataSource.destroy();
      console.log('PostgreSQL connection closed');
  } catch (error) {
      console.error('Error closing PostgreSQL connection:', error);
  }
};

export { AppDataSource, connectPostgres, closePostgres };