import { ApolloError } from 'apollo-server-express';
import { ErrorCode, IError } from '../interfaces/error.interface';

export class APIError extends ApolloError implements IError {
    readonly code: ErrorCode;
    readonly innerError: any;

    constructor(code: ErrorCode, message?: string, innerError?: any) {
        message ?
            super(message, code) :
            super(code);

        this.code = code;

        if (innerError) {
            this.innerError = innerError;
        }
    }
}
