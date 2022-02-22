export const preset = 'ts-jest';
export const extensionsToTreatAsEsm = ['.ts'];
export const globals = {
    'ts-jest': {
        useESM: true,
    },
};
export const moduleNameMapper = {
    '^(\\.{1,2}/.*)\\.js$': '$1',
};