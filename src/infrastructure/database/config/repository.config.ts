import {MongoUserRepository} from '../mongodb/repositories/user.repository-mongodb';
import { PostgresUserRepository } from '../postgres/repositories/user.repository-postgres';
import config from './config';

type Repositories = {
    UserRepository: typeof PostgresUserRepository | typeof MongoUserRepository;
  };

export const repositories = () : Repositories =>{
    if(config.dbType === 'postgres'){
        return {
            UserRepository : PostgresUserRepository,
        };
    }else if(config.dbType === 'mongodb'){
        return {
            UserRepository : MongoUserRepository
        }
    }
    throw new Error('Database type is not supported');
}