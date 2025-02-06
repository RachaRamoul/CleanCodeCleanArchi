import {connectMongodb, closeMongodb} from '../mongodb/mongodb.config';
import { connectPostgres, closePostgres } from '../postgres/postgres.config';
import config from './config';

export const initializeDatabase = async () => {
    
  if (config.dbType === 'mongodb') { 
      console.log('Using MongoDB...');
      await connectMongodb();
  } else if (config.dbType === 'postgres') {  
      console.log('Using PostgreSQL...');   
      await connectPostgres();
  } else {
      throw new Error(`Unsupported Database type : ${config.dbType}`);
  }
};

export const closeDatabase = async () => {

    if (config.dbType === 'mongodb') { 
      console.log('Closing MongoDB connection...');
      await closeMongodb();
    } else if (config.dbType === 'postgres') {  
      console.log('Closing PostgreSQL connection...');
      await closePostgres();
    } else {
      throw new Error(`Unsupported Database type: ${config.dbType}`);
    }
};
