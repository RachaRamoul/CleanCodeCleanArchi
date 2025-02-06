import { InvalidName } from "../errors/name.error";

export default class Name {
    constructor(private readonly name: string) {
        if (!this.isValid(name)) {
            throw new InvalidName(name);
        }
        this.name = name;
    }

    private isValid(name: string): boolean {
        const minLength = 2;
        const maxLength = 30;
        return name.length >= minLength && name.length <= maxLength;
    }

    public get value(): string {
        return this.name;
    }

    public toJSON(): string {
        return this.name;
    }
}
