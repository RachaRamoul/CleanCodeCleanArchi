export class InvalidEmail extends Error {
    public constructor(public readonly email: string) {
      super();
      this.name = "Invalid email format.";
    }
  }