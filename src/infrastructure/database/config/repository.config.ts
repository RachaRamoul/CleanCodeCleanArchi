import {MongoUserRepository} from '../mongodb/repositories/user.repository';
import {MongoMotorcycleRepository} from '../mongodb/repositories/motorcycle.repository';
import { PostgresMotorcycleRepository } from '../postgres/repositories/motorcycle.repository-postgres';
import { PostgresUserRepository } from '../postgres/repositories/user.repository';
require('dotenv').config();

const DB_TYPE = process.env.DB_TYPE;

type Repositories = {
    UserRepository: typeof PostgresUserRepository | typeof MongoUserRepository;
    MotorcycleRepository: typeof  PostgresMotorcycleRepository | typeof  MongoMotorcycleRepository;
  };

export const repositories = () : Repositories =>{
    if(DB_TYPE == 'postgres'){
        return {
            UserRepository : PostgresUserRepository,
            MotorcycleRepository : PostgresMotorcycleRepository,
        };
    }else if(DB_TYPE == 'mongodb'){
        return {
            UserRepository : MongoUserRepository,
            MotorcycleRepository : MongoMotorcycleRepository,
        }
    }
    throw new Error('DB_TYPE non supporté');
}