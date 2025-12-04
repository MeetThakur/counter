/**
 * Input validation utilities for the Tallies app
 */

/**
 * Validates a counter name
 * @param name - Counter name to validate
 * @returns Error message if invalid, null if valid
 */
export function validateCounterName(name: string): string | null {
    if (!name || !name.trim()) {
        return "Counter name cannot be empty";
    }
    if (name.length > 50) {
        return "Counter name is too long (maximum 50 characters)";
    }
    return null;
}

/**
 * Validates a target value
 * @param target - Target value to validate
 * @returns Error message if invalid, null if valid
 */
export function validateTarget(target: number | string): string | null {
    const numTarget = typeof target === "string" ? parseInt(target, 10) : target;

    if (isNaN(numTarget)) {
        return "Target must be a valid number";
    }
    if (numTarget < 0) {
        return "Target must be a positive number";
    }
    if (numTarget > 999999) {
        return "Target is too large (maximum 999,999)";
    }
    if (!Number.isInteger(numTarget)) {
        return "Target must be a whole number";
    }
    return null;
}

/**
 * Validates a custom increment value
 * @param increment - Increment value to validate
 * @returns Error message if invalid, null if valid
 */
export function validateIncrement(increment: number | string): string | null {
    const numIncrement = typeof increment === "string" ? parseInt(increment, 10) : increment;

    if (isNaN(numIncrement)) {
        return "Increment must be a valid number";
    }
    if (numIncrement <= 0) {
        return "Increment must be greater than 0";
    }
    if (numIncrement > 10000) {
        return "Increment is too large (maximum 10,000)";
    }
    if (!Number.isInteger(numIncrement)) {
        return "Increment must be a whole number";
    }
    return null;
}

/**
 * Sanitizes a counter name by trimming whitespace
 * @param name - Counter name to sanitize
 * @returns Sanitized counter name
 */
export function sanitizeCounterName(name: string): string {
    return name.trim();
}
