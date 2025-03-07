/**
 * Package A - Top-level utility functions
 * Uses functions from package B
 */
import { squarePlusConstant, doubleNumber } from "@jest-monorepo/b";

/**
 * A function in package A that calculates a complex formula using package B
 */
export function complexCalculation(value: number): number {
  const doubled = doubleNumber(value);
  const withConstant = squarePlusConstant(doubled, 10);
  return withConstant;
}

/**
 * A function in package A that formats a calculation result
 */
export function formatResult(value: number): string {
  const result = complexCalculation(value);
  return `The result is: ${result}`;
}
