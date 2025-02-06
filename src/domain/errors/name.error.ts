export class InvalidName extends Error {
    public constructor(public readonly name: string) {
        super(`Invalid name format: must be 2-30 characters: ${name}`);
        this.name = "InvalidName";
    }
}
