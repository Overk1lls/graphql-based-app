// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.*\\.(spec|test)\\.ts$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts']
};

module.exports = config;