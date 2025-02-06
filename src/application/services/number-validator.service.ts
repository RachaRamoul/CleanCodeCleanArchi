export default class NumberValidatorService {
 
    public static isValid(number: string): boolean {
        const minLength = 10;
        const maxLength = 10;
        const onlyDigitsRegex = /^[0-9]+$/;

        return number.length >= minLength &&
               number.length <= maxLength &&
               onlyDigitsRegex.test(number);
    }
}

