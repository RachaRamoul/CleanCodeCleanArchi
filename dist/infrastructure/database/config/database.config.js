"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDB = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const typeorm_config_1 = require("./typeorm.config");
exports.AppDataSource = new typeorm_1.DataSource((0, typeorm_config_1.getDataSourceOptions)());
const initializeDB = async () => {
    try {
        await exports.AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    }
    catch (error) {
        console.error('Error during Data Source initialization:', error);
        process.exit(1);
    }
};
exports.initializeDB = initializeDB;
