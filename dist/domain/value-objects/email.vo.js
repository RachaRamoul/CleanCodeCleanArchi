"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const email_error_1 = require("../errors/email.error");
class Email {
    constructor(email) {
        this.email = email;
        if (!this.validate(email)) {
            throw new email_error_1.InvalidEmail(email);
        }
        this.email = email;
    }
    validate(email) {
        const emailRegex = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email.toLowerCase());
    }
}
exports.Email = Email;
