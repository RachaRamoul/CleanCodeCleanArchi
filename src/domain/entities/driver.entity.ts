import Name from '../value-objects/name.vo';
import { Company } from './company.entity';
export class Driver {
  constructor(
    public id: string,
    public firstName: Name,
    public lastName: Name,
    public company: Company,
    public phoneNumber: string,
    public licenseNumber: string,
    public experienceYears: number,
  ) {}
}
