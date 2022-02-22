export enum ErrorCode {
    JSON_BAD = 'JSON_BAD',
    UNAUTHORIZED = 'UNATHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    NOT_FOUND = 'NOT_FOUND',
    SERVER = 'SERVER',
};

export interface IError {
    code: ErrorCode
}