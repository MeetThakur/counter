/**
 * Color utility functions for the Tallies app
 */

/**
 * Converts a hex color to RGB values
 * @param hex - Hex color string (e.g., "#FF5733")
 * @returns RGB object with r, g, b values (0-255)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 0, g: 0, b: 0 };
}

/**
 * Calculates the relative luminance of a color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Relative luminance value (0-1)
 */
export function getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map((c) => {
        const val = c / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Determines the best contrasting text color (black or white) for a given background color
 * @param hexColor - Background color in hex format (e.g., "#FF5733")
 * @returns "#000000" for light backgrounds, "#FFFFFF" for dark backgrounds
 */
export function getContrastColor(hexColor: string): string {
    const { r, g, b } = hexToRgb(hexColor);
    const luminance = getLuminance(r, g, b);
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

/**
 * Validates if a string is a valid hex color
 * @param color - Color string to validate
 * @returns true if valid hex color, false otherwise
 */
export function isValidHexColor(color: string): boolean {
    return /^#[0-9A-F]{6}$/i.test(color);
}
