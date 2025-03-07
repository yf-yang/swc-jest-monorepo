/**
 * Utility functions for package B
 */
import { squarePlusConstant, doubleNumber } from "@/index";

/**
 * Calculates the result of squaring a number, adding a constant,
 * and then doubling the result
 */
export function complexCalculation(num: number, constant: number): number {
  const squaredPlusConstant = squarePlusConstant(num, constant);
  return doubleNumber(squaredPlusConstant);
}

/**
 * Formats a number with commas for thousands
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}
