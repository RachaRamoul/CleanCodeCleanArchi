export class InvalidSiretNumber extends Error {
    public constructor(public readonly siret: string) {
        super(`Invalid SIRET number: ${siret}`);
        this.name = "InvalidSiretNumber";
    }
}