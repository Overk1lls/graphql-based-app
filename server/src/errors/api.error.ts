import { ErrorCode, IError } from "../interfaces/error.interface";

export default class APIError extends Error implements IError {
    readonly code: ErrorCode;
    readonly innerError: any;

    constructor(code: ErrorCode, message?: string, innerError?: any) {
        message ?
            super(message) :
            super(code);

        this.code = code;

        if (innerError) {
            this.innerError = innerError;
        }
    }
}