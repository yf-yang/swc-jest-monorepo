/**
 * Package B - Mid-level utility functions
 * Uses functions from package C
 */
import { square, addConstant, double } from "@/helpers";

/**
 * A function in package B that uses functions from package C
 * to calculate the square of a number plus a constant
 */
export function squarePlusConstant(num: number, constant: number): number {
  const squared = square(num);
  return addConstant(squared, constant);
}

/**
 * A function in package B that doubles a number using package C
 */
export function doubleNumber(num: number): number {
  return double(num);
}
