import { Repository } from 'typeorm';
import { AppDataSource } from '../postgres.config';
import UserPostgresEntity from '../persistence/entities/user.entity-postgres';

export class UserRepositoryPostgres {
  private repository: Repository<UserPostgresEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserPostgresEntity);
  }

  async create(user: UserPostgresEntity): Promise<UserPostgresEntity> {
    return this.repository.save(user);
  }

  async findById(userId: string): Promise<UserPostgresEntity | null> {
    return this.repository.findOne({
      where: { userId },
    });
  }

  async findByEmail(email: string): Promise<UserPostgresEntity | null> {
    return this.repository.findOne({
      where: { email },
    });
  }

  async findAll(): Promise<UserPostgresEntity[]> {
    return this.repository.find();
  }

  async update(
    userId: string,
    updateData: Partial<UserPostgresEntity>
  ): Promise<void> {
    await this.repository.update(userId, updateData);
  }

  async delete(userId: string): Promise<void> {
    await this.repository.delete(userId);
  }

  async findByCompanyId(companyId: string): Promise<UserPostgresEntity[]> {
    return this.repository.find({
      where: { company_Id: companyId },
    });
  }

  // Méthode pour vérifier si l'email est unique
  async isEmailUnique(email: string): Promise<boolean> {
    const user = await this.repository.findOne({
      where: { email },
    });
    return !user; // Si aucun utilisateur n'est trouvé avec cet email, il est unique
  }
}
