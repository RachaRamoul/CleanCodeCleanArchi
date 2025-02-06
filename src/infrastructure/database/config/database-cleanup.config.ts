import { AppDataSource } from '../postgres/postgres.config';
import mongoose from 'mongoose';
import config from '../config/config';


export const clearTableOrCollection = async (tableOrCollectionName: string) => {
    if (config.dbType === 'postgres') {
      await clearPostgresTable(tableOrCollectionName);
    } else if (config.dbType === 'mongodb') {
      await clearMongoCollection(tableOrCollectionName);
    } else {
      throw new Error(`Unsupported DB_TYPE for clearTableOrCollection: ${config.dbType}`);
    }
};

const tableExistsInPostgres = async (tableName: string): Promise<boolean> => {
  const result = await AppDataSource.query(`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_name = '${tableName}'
    );
  `);
  return result[0].exists;
};

const clearPostgresTable = async (tableName: string) => {
  const exists = await tableExistsInPostgres(tableName);
  if (exists) {
    console.log(`Clearing data from PostgreSQL table "${tableName}"...`);
    await AppDataSource.query(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE`);
    console.log(`Data cleared from PostgreSQL table "${tableName}".`);
  } else {
    console.log(`Table "${tableName}" does not exist in PostgreSQL. Skipping deletion.`);
  }
};

const collectionExistsInMongo = async (collectionName: string): Promise<boolean> => {
    if(!mongoose.connection.db) throw new Error('mongoose.connection.db is undefined');
  const collections = await mongoose.connection.db.listCollections().toArray();
  return collections.some((collection) => collection.name === collectionName);
};

const clearMongoCollection = async (collectionName: string) => {
  const exists = await collectionExistsInMongo(collectionName);
  if (exists && mongoose.connection.db) {
    console.log(`Clearing data from MongoDB collection "${collectionName}"...`);
    await mongoose.connection.db.collection(collectionName).deleteMany({});
    console.log(`Data cleared from MongoDB collection "${collectionName}".`);
  } else {
    console.log(`Collection "${collectionName}" does not exist in MongoDB. Skipping deletion.`);
  }
};
