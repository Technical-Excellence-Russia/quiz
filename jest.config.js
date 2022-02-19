module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["./src/**/*", "./lib/*"],
    coverageReporters: ["lcov"],
    testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"]
};