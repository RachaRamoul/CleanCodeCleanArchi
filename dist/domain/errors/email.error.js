"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmail = void 0;
class InvalidEmail extends Error {
    constructor(email) {
        super();
        this.email = email;
        this.name = "Invalid email format.";
    }
}
exports.InvalidEmail = InvalidEmail;
