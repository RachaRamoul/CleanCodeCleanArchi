import { InvalidSiretNumber } from "../errors/siret-number.error";

export default class SiretNumber {
    constructor(private readonly siretNumber: string) {
        if (!this.validate(siretNumber)) {
            throw new InvalidSiretNumber(siretNumber);
        }
        this.siretNumber = siretNumber;
    }

    private validate(siretNumber: string): boolean {
        const siretRegex = /^\d{14}$/;
        return siretRegex.test(siretNumber);
    }

    private luhnCheck(siretNumber: string): boolean {
        let sum = 0;
        const reverseDigits = siretNumber.split('').reverse();
        for (let i = 0; i < reverseDigits.length; i++) {
            let digit = parseInt(reverseDigits[i]);
            if (i % 2 === 1) { 
                digit *= 2;
                if (digit > 9) digit -= 9; 
            }
            sum += digit;
        }
        return sum % 10 === 0;
    }

    public get value(): string {
        return this.siretNumber;
    }

    public toJSON(): string {
        return this.siretNumber;
    }
}