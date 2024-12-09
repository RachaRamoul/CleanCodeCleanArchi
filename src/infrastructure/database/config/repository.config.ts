import {MongoUserRepository} from '../mongodb/repositories/user.repository';
import { PostgresUserRepository } from '../postgres/repositories/user.repository';
require('dotenv').config();

const DB_TYPE = process.env.DB_TYPE;

type Repositories = {
    UserRepository: typeof PostgresUserRepository | typeof MongoUserRepository;
  };

export const repositories = () : Repositories =>{
    if(DB_TYPE == 'postgres'){
        return {
            UserRepository : PostgresUserRepository,
        };
    }else if(DB_TYPE == 'mongodb'){
        return {
            UserRepository : MongoUserRepository
        }
    }
    throw new Error('DB_TYPE non supporté');
}