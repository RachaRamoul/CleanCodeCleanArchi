export class User {
  constructor(
    public company_Id: string,
    public nom: string,
    public prenom: string,
    public email: string,
    public telephone: string,
    public numeroSiret: string,
    public type: string,  // (Livreur, Location, etc.)
    public password: string // Mot de passe ajouté ici
  ) {}
}
