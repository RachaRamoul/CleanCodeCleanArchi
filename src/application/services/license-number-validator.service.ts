export default class LicenseNumberValidatorService {
    public static isValid(licenseNumber: string): boolean {
        const minLength = 8;
        const maxLength = 16;
        const hasOnlyValidChars = /^[A-Z0-9]+$/.test(licenseNumber);
        const startsWithLetter = /^[A-Z]/.test(licenseNumber); 

        return (
            licenseNumber.length >= minLength &&
            licenseNumber.length <= maxLength &&
            hasOnlyValidChars &&
            startsWithLetter
        );
    }
}