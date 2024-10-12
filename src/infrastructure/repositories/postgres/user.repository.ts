import { Pool } from 'pg';
import { UserRepository } from '../../../application/repositories/user.repository';
import { User } from '../../../domain/entities/user.entity';

export class PostgresUserRepository implements UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  }

  async addUser(user: User): Promise<void> {
    await this.pool.query(
      'INSERT INTO users (id, first_name, last_name) VALUES ($1, $2, $3)',
      [user.id, user.firstName, user.lastName]
    );
  }

  async listUsers(): Promise<User[]> {
    const result = await this.pool.query('SELECT id, first_name, last_name FROM users');
    return result.rows.map((row: { id: string, first_name: string, last_name: string }) => 
      new User(row.id, row.first_name, row.last_name)
    );
  }

  async removeUser(id: string): Promise<void> {
    await this.pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
}
