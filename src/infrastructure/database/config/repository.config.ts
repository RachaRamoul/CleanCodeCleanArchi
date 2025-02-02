import { PostgresCompanyRepository } from '../postgres/repositories/company.repository-postgres';
import { MongoCompanyRepository } from '../mongodb/repositories/company.repository-mongodb';

import { MotorcycleRepositoryPostgres } from '../postgres/repositories/motorcycle.repository-postgres';
import { MotorcycleRepositoryMongoDB } from '../mongodb/repositories/motorcycle.repository-mongodb';

import config from './config';

type Repositories = {
    CompanyRepository: PostgresCompanyRepository | MongoCompanyRepository;
    MotorcycleRepository: MotorcycleRepositoryPostgres | MotorcycleRepositoryMongoDB;
};

export const repositories = (): Repositories => {
    if (config.dbType === 'postgres') {
        return {
            CompanyRepository: new PostgresCompanyRepository(),
            MotorcycleRepository: new MotorcycleRepositoryPostgres(),
        };
    } else if (config.dbType === 'mongodb') {
        return {
            CompanyRepository: new MongoCompanyRepository(),
            MotorcycleRepository: new MotorcycleRepositoryMongoDB(),
        };
    }
    throw new Error('Database type is not supported');
};