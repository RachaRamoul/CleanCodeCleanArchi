export class Email {
    constructor(public email: string) {
      if (!this.validate(email)) {
        throw new Error('Invalid email format.');
      }
      this.email = email;
    }
  
    public validate(email: string): boolean {
      const emailRegex =
        /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(email.toLowerCase());
    }
  }
  