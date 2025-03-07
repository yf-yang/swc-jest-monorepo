/**
 * Package C - Base utility functions
 */

import { generateId, add, multiply } from "./core";

/**
 * A simple utility function in package C that adds two numbers
 */
export function addNumbers(a: number, b: number): number {
  return add(a, b);
}

/**
 * A simple utility function in package C that multiplies two numbers
 */
export function multiplyNumbers(a: number, b: number): number {
  generateId();
  return multiply(a, b);
}
