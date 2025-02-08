import { CompanyRepositoryPostgres } from '../postgres/repositories/company.repository-postgres';
import { CompanyRepositoryMongoDB } from '../mongodb/repositories/company.repository-mongodb';

import { MotorcycleRepositoryPostgres } from '../postgres/repositories/motorcycle.repository-postgres';
import { MotorcycleRepositoryMongoDB } from '../mongodb/repositories/motorcycle.repository-mongodb';

import { MotorcyclePartRepositoryPostgres } from '../postgres/repositories/motorcycle-part.repository-postgres';
import { MotorcyclePartRepositoryMongoDB } from '../mongodb/repositories/motorcycle-part.repository-mongodb';

import { DriverRepositoryPostgres } from '../postgres/repositories/driver.repository-postgres';
import { DriverRepositoryMongoDB } from '../mongodb/repositories/driver.repository-mongodb';

import { MotorcycleModelRepositoryPostgres } from '../postgres/repositories/motorcycle-model.repository-postgres';
import { MotorcycleModelRepositoryMongoDB } from '../mongodb/repositories/motorcycle-model.repository-mongodb';

import config from './config';

type Repositories = {
    CompanyRepository: CompanyRepositoryPostgres | CompanyRepositoryMongoDB;
    MotorcycleRepository: MotorcycleRepositoryPostgres | MotorcycleRepositoryMongoDB;
    MotorcyclePartRepository: MotorcyclePartRepositoryPostgres | MotorcyclePartRepositoryMongoDB;
    DriverRepository: DriverRepositoryPostgres |  DriverRepositoryMongoDB;
    MotorcycleModelRepository: MotorcycleModelRepositoryPostgres | MotorcycleModelRepositoryMongoDB;
};

export const repositories = (): Repositories => {
    if (config.dbType === 'postgres') {
        return {
            CompanyRepository: new CompanyRepositoryPostgres(),
            MotorcycleRepository: new MotorcycleRepositoryPostgres(),
            MotorcyclePartRepository: new MotorcyclePartRepositoryPostgres(),
            DriverRepository: new DriverRepositoryPostgres(),
            MotorcycleModelRepository: new MotorcycleModelRepositoryPostgres(),
        };
    } else if (config.dbType === 'mongodb') {
        return {
            CompanyRepository: new CompanyRepositoryMongoDB(),
            MotorcycleRepository: new MotorcycleRepositoryMongoDB(),
            MotorcyclePartRepository: new MotorcyclePartRepositoryMongoDB(),
            DriverRepository: new DriverRepositoryMongoDB(),
            MotorcycleModelRepository: new MotorcycleModelRepositoryMongoDB(),
        };
    }
    throw new Error('Database type is not supported');
};