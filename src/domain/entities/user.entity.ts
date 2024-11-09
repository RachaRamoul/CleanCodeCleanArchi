export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public siretNumber: string,
    public companyName: string,
    public password: string  // Ajout du mot de passe
  ) {}
}
