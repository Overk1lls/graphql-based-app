/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApolloError } from 'apollo-server-express';

export enum ErrorCode {
    JSON_BAD = 'JSON_BAD',
    UNAUTHORIZED = 'UNATHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    NOT_FOUND = 'NOT_FOUND',
    SERVER = 'SERVER',
    BAD_REQUEST = 'INVALID_REQUEST'
}

export interface IError {
    code: ErrorCode
}

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
/* eslint-disable @typescript-eslint/no-explicit-any */
