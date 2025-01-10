import connectMongodb from '../mongodb/mongodb.config';
import { connectPostgres } from '../postgres/postgres.config';
import config from './config';

const initializeDatabase = async () => {
    
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

export default initializeDatabase;
