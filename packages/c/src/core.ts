/**
 * Core functions for package C
 */
import { nanoid } from "nanoid";
import { log } from "@/log";

/**
 * Generate a unique ID and log it
 */
export function generateId(): string {
  const id = nanoid();
  log(id);
  return id;
}

/**
 * Basic addition operation
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Basic multiplication operation
 */
export function multiply(a: number, b: number): number {
  return a * b;
}
