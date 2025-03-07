# Jest Monorepo Demo

This monorepo demonstrates how to test TypeScript packages without needing to build their dependencies using `@swc/jest`.

## Project Structure

The monorepo contains three TypeScript packages with the following dependency chain:

- Package A depends on Package B
- Package B depends on Package C

## Key Features

- Uses PNPM workspaces for managing the monorepo
- Uses TypeScript project references for proper type checking
- Uses `@swc/jest` for testing TypeScript code without transpilation
- Demonstrates how to test packages without building their dependencies

## How It Works

The key to testing without building dependencies is in the Jest configuration:

1. Each package uses `@swc/jest` to transpile TypeScript code on the fly during tests
2. Jest's `moduleNameMapper` is configured to directly use the TypeScript source files from dependencies:

```js
moduleNameMapper: {
  '^@jest-monorepo/b$': '<rootDir>/../b/src/index.ts',
  '^@jest-monorepo/c$': '<rootDir>/../c/src/index.ts'
}
```

This allows Jest to use the source TypeScript files directly, without requiring the dependencies to be built first.

## Testing Package A

Package A has a dedicated `test` folder that contains tests that mock its dependencies from package B, demonstrating an alternative approach to testing without building dependencies.

To run the tests for package A:

```bash
cd packages/a
pnpm test
```

This will run the tests using Jest with SWC, without requiring packages B and C to be built first.

## Installation

```bash
pnpm install
```

## Running Tests

To run tests for all packages:

```bash
pnpm test
```

To run tests for a specific package:

```bash
cd packages/a  # or b or c
pnpm test
```
