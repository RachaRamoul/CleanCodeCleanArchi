import Email from '../value-objects/email.vo';
import SiretNumber from '../value-objects/siret-number.vo';
import Name from '../value-objects/name.vo';
export class Company {
  constructor(
    public id: string,
    public name: Name,
    public email: Email,
    public number: string,
    public siretNumber: SiretNumber,
    public isAdmin: boolean,
    public password: string,
  ) {}
}
