import { InvalidEmail } from "../errors/email.error";

export default class Email {
    constructor(private readonly email: string) {
      if (!this.validate(email)) {
        throw new InvalidEmail(email);
      }
      this.email = email;
    }
  
    private validate(email: string): boolean {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailRegex.test(email.toLowerCase());
    }

    public get value(): string {
      return this.email;
    }

    public toJSON(): string {
      return this.email;
    }

  }
  