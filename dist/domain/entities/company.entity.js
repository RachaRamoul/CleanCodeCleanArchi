"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(companyId, name, email, number, siretNumber, password) {
        this.companyId = companyId;
        this.name = name;
        this.email = email;
        this.number = number;
        this.siretNumber = siretNumber;
        this.password = password;
    }
}
exports.Company = Company;
