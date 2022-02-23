module.exports = {
    preset: 'ts-jest',
    roots: ['./src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            'useESM': true
        }
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};