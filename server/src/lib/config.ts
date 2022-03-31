export enum ContentType {
    FORM_URL_ENCODED = 'application/x-www-form-urlencoded',
    JSON = 'application/json'
}

export const API_ENDPOINT = 'https://api.e-olymp.com/graphql';

export enum Error {
    USER_NOT_FOUND = 'User is not found',
    USERS_NOT_FOUND = 'Users are not found',
    DATE_NOT_FOUND = 'Latest fetch date is not found'
}
