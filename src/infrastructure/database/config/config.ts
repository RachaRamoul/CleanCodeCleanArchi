require('dotenv').config();

const config = {
    mongoURL: process.env.MONGO_URL || '',
    postgresURL: process.env.POSTGRES_URL || '',
    dbType: process.env.DB_TYPE || '',
};

export default config;