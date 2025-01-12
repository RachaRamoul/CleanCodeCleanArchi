"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSourceOptions = void 0;
const getDataSourceOptions = () => {
    require('dotenv').config();
    const DB_TYPE = process.env.DB_TYPE;
    console.log("DB TYPE :", DB_TYPE);
    const commonConfig = {
        synchronize: false,
        logging: true,
        migrationsRun: true
    };
    try {
        const dbConfig = process.env.DB_TYPE === 'mongodb'
            ? require('../mongodb/mongodb.config').default
            : process.env.DB_TYPE === 'postgres' ?
                require('../postgres/postgres.config').default
                : null;
        if (!dbConfig)
            throw new Error(`La base de données ${DB_TYPE} non supporté`);
        return dbConfig;
    }
    catch (error) {
        throw new Error(`Erreur lors du chargement du fichier de configuration pour la base de données :  ${error}`);
    }
};
exports.getDataSourceOptions = getDataSourceOptions;
