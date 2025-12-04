/**
 * Color constants for the Tallies app
 * Single source of truth for all color values
 */

/**
 * Preset colors available for counter customization
 * These colors are carefully selected for visibility and aesthetics
 */
export const PRESET_COLORS = [
    "#007AFF", // Blue
    "#34C759", // Green
    "#FF9500", // Orange
    "#FF3B30", // Red
    "#5856D6", // Purple
    "#AF52DE", // Violet
    "#FF2D55", // Pink
    "#5AC8FA", // Cyan
    "#4CD964", // Light Green
    "#FFCC00", // Yellow
    "#8E8E93", // Gray
    "#000000", // Black
] as const;

/**
 * Default color for new counters
 */
export const DEFAULT_COUNTER_COLOR = "#007AFF";

/**
 * Theme colors for light mode
 */
export const LIGHT_THEME = {
    background: "#FFFFFF",
    text: "#000000",
    textSecondary: "#8E8E93",
    border: "#E5E5EA",
    card: "#F2F2F7",
    tabBar: "#FFFFFF",
    tabBarBorder: "#E5E5EA",
} as const;

/**
 * Theme colors for dark mode
 */
export const DARK_THEME = {
    background: "#000000",
    text: "#FFFFFF",
    textSecondary: "#8E8E93",
    border: "#2C2C2C",
    card: "#1E1E1E",
    tabBar: "#1E1E1E",
    tabBarBorder: "#2C2C2C",
} as const;
