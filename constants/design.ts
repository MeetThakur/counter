/**
 * Design system constants for the Tallies app
 * Ensures consistency across the UI
 */

/**
 * Spacing scale following an 8px grid system
 */
export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
} as const;

/**
 * Border width values for the neobrutal design
 */
export const BORDER_WIDTH = {
    thin: 1,
    medium: 2,
    thick: 4,
    neobrutal: 5,
} as const;

/**
 * Border radius values
 */
export const BORDER_RADIUS = {
    none: 0,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 9999,
} as const;

/**
 * Font weights
 */
export const FONT_WEIGHT = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
} as const;

/**
 * Font sizes
 */
export const FONT_SIZE = {
    xs: 11,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 52,
} as const;

/**
 * Shadow configurations for neobrutal design
 */
export const SHADOWS = {
    neobrutal: {
        offset: { width: 0, height: 4 },
        opacity: 1,
        radius: 0,
        color: "#000000",
    },
    neobrutalism: {
        offset: { width: 0, height: 3 },
        opacity: 1,
        radius: 0,
        color: "#000000",
    },
    soft: {
        offset: { width: 0, height: 2 },
        opacity: 0.1,
        radius: 4,
        color: "#000000",
    },
} as const;

/**
 * Button sizes
 */
export const BUTTON_SIZE = {
    small: 40,
    medium: 48,
    large: 56,
    xlarge: 60,
} as const;

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATION = {
    fast: 150,
    normal: 250,
    slow: 350,
} as const;

/**
 * Timing constants
 */
export const TIMING = {
    undoTimeout: 5000, // 5 seconds to undo deletion
    longPressDelay: 500, // 500ms for long press activation
    debounceDelay: 300, // 300ms debounce for search/input
} as const;
