import { PostgresCompanyRepository } from '../postgres/repositories/company.repository-postgres';
import { MongoCompanyRepository } from '../mongodb/repositories/company.repository-mongodb';
import config from './config';

type Repositories = {
    CompanyRepository: typeof PostgresCompanyRepository | typeof MongoCompanyRepository;
};

export const repositories = () : Repositories =>{
    if(config.dbType === 'postgres'){
        return {
            CompanyRepository : PostgresCompanyRepository,
        };
    }else if(config.dbType === 'mongodb'){
        return {
            CompanyRepository : MongoCompanyRepository
        }
    }
    throw new Error('Database type is not supported');
}