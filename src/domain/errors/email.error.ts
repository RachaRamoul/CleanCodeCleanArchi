export class InvalidEmail extends Error {
    public constructor(public readonly email: string) {
      super(`Invalid email format: ${email}`);
      this.message = "InvalidEmail";
    }
  }