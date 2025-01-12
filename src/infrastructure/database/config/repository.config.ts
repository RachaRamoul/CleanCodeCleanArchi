import {MongoUserRepository} from '../mongodb/repositories/user.repository-mongodb';
import {MongoMotorcycleRepository} from '../mongodb/repositories/motorcycle.repository';
import { PostgresMotorcycleRepository } from '../postgres/repositories/motorcycle.repository-postgres';
import { PostgresUserRepository } from '../postgres/repositories/user.repository-postgres';
import config from './config';

type Repositories = {
    UserRepository: typeof PostgresUserRepository | typeof MongoUserRepository;
    MotorcycleRepository: typeof  PostgresMotorcycleRepository | typeof  MongoMotorcycleRepository;
  };

export const repositories = () : Repositories =>{
    if(config.dbType === 'postgres'){
        return {
            UserRepository : PostgresUserRepository,
            MotorcycleRepository : PostgresMotorcycleRepository,
        };
    }else if(config.dbType === 'mongodb'){
        return {
            UserRepository : MongoUserRepository,
            MotorcycleRepository : MongoMotorcycleRepository,
        }
    }
    throw new Error('Database type is not supported');
}