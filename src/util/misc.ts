import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {Jwt} from "@/constants/EnvVars.ts"
/**
 * Miscellaneous shared functions go here.
 */


/**
 * Get a random number between 1 and 1,000,000,000,000
 */
export function getRandomInt(): number {
  return Math.floor(Math.random() * 1_000_000_000_000);
}

/**
 * Hash a value
 */
export async function hash(value: any): Promise<string> {
  return await bcrypt.hash(value);
}

/**
 * Compare hashed value
 */
export async function check(value: string, plain: any): Promise<boolean> {
  return await bcrypt.compare(plain, value);
}

/**
 * Hash a value
 */
export async function sign(value: any): Promise<string> {
  return await jwt.sign(value, Jwt.Secret);
}

/**
 * Compare hashed value
 */
export async function verify(value: string): Promise<boolean> {
  return await jwt.verify(value, Jwt.Secret);
}
/**
 * Wait for a certain number of milliseconds.
 */
export function tick(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
