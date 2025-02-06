import { Company } from '@domain/entities/company.entity';
import { AuthenticateCompanyUseCase } from '../../../../../../application/usecases/company/authenticate-company.usecase';
import { repositories } from '../../../../../database/config/repository.config';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const { CompanyRepository } = repositories();

export class AuthService {
    
    constructor(private companyRepository = CompanyRepository, private jwtSecret: string) {}

    async authenticate(email: string, password: string): Promise<string> {
        const authenticateCompanyUseCase = new AuthenticateCompanyUseCase(this.companyRepository);

        const company = await authenticateCompanyUseCase.execute(email);

        const isPasswordValid = await bcrypt.compare(password, company.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password.');
        }

        return this.generateAccessToken(company);
    }

    generateAccessToken(company: Company): string {
        
        const token: string = jwt.sign(
            { id: company.id, isAdmin: company.isAdmin },
            this.jwtSecret,
            { expiresIn: '48h' } 
        );
        
        return token;
    }

    validateToken(token: string): { id: string; isAdmin: boolean } {
        try {
            const decodedToken = jwt.verify(token, this.jwtSecret) as { id: string; isAdmin: boolean };
            return decodedToken;
        } catch (error) {
            throw new Error('Invalid or expired token.');
        }
    }
}
