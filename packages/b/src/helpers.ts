/**
 * Helper functions for package B
 */
import { addNumbers, multiplyNumbers } from "@jest-monorepo/c";

/**
 * Calculate the square of a number
 */
export function square(num: number): number {
  return multiplyNumbers(num, num);
}

/**
 * Add a constant to a number
 */
export function addConstant(num: number, constant: number): number {
  return addNumbers(num, constant);
}

/**
 * Double a number
 */
export function double(num: number): number {
  return multiplyNumbers(num, 2);
}
