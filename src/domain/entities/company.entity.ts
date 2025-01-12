export class Company {
    companyId: string;
    name: string;
    email: string;
    number: string;
    siretNumber: string;
    password: string;
  
    constructor(companyId: string, name: string, email: string, number: string, siretNumber: string, password: string) {
      this.companyId = companyId;
      this.name = name;
      this.email = email;
      this.number = number;
      this.siretNumber = siretNumber;
      this.password = password;
    }
  
  }
  