import mongoose from 'mongoose';
import config from '../config/config';

export const connectMongodb = async () => {
    try {
        await mongoose.connect(config.mongoURL, {});
    } catch (error: unknown) {
      if(error instanceof Error) console.error(error.message);
      else console.error('An error occurred while connecting to the database');
    }
};

export const closeMongodb = async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error: unknown) {
      if(error instanceof Error) console.error(error.message);
      else console.error('An error occurred while closing MongoDB:');
    }
};
