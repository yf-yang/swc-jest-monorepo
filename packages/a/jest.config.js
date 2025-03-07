/**
 * Jest configuration for package A
 */
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: false,
            decorators: true,
          },
          target: "es2020",
        },
      },
    ],
  },
  // This is the key part: we're using moduleNameMapper to mock dependencies
  moduleNameMapper: {
    "^@jest-monorepo/b$": "<rootDir>/../b/src/index.ts",
    "^@jest-monorepo/c$": "<rootDir>/../c/src/index.ts",
  },
  // Tell Jest which extensions should be treated as ESM
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
