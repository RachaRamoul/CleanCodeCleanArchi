import { PostgresCompanyRepository } from '../postgres/repositories/company.repository-postgres';
import { MongoCompanyRepository } from '../mongodb/repositories/company.repository-mongodb';

import { MotorcycleRepositoryPostgres } from '../postgres/repositories/motorcycle.repository-postgres';
import { MotorcycleRepositoryMongoDB } from '../mongodb/repositories/motorcycle.repository-mongodb';

import { MotorcyclePartRepositoryPostgres } from '../postgres/repositories/motorcycle-part.repository-postgres';

import config from './config';

type Repositories = {
    CompanyRepository: PostgresCompanyRepository | MongoCompanyRepository;
    MotorcycleRepository: MotorcycleRepositoryPostgres | MotorcycleRepositoryMongoDB;
    MotorcyclePartRepository: MotorcyclePartRepositoryPostgres;
};

export const repositories = (): Repositories => {
    if (config.dbType === 'postgres') {
        return {
            CompanyRepository: new PostgresCompanyRepository(),
            MotorcycleRepository: new MotorcycleRepositoryPostgres(),
            MotorcyclePartRepository: new MotorcyclePartRepositoryPostgres(),
        };
    } else if (config.dbType === 'mongodb') {
        return {
            CompanyRepository: new MongoCompanyRepository(),
            MotorcycleRepository: new MotorcycleRepositoryMongoDB(),
            MotorcyclePartRepository: new MotorcyclePartRepositoryPostgres(),
        };
    }
    throw new Error('Database type is not supported');
};