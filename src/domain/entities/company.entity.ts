export class Company {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public number: string,
    public siretNumber: string,
    public isAdmin: boolean,
    public password: string,
  ) {}
}
