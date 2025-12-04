/**
 * Counter templates for quick creation
 */

export interface CounterTemplate {
    name: string;
    icon: string;
    target: number;
    color: string;
}

/**
 * Pre-defined counter templates for common use cases
 */
export const COUNTER_TEMPLATES: CounterTemplate[] = [
    { name: "Water Glasses", icon: "💧", target: 8, color: "#5AC8FA" },
    { name: "Steps", icon: "👟", target: 10000, color: "#34C759" },
    { name: "Pages Read", icon: "📖", target: 50, color: "#FF9500" },
    { name: "Workout", icon: "💪", target: 5, color: "#FF3B30" },
    { name: "Meditation", icon: "🧘", target: 1, color: "#34C759" },
    { name: "Tasks Done", icon: "✅", target: 10, color: "#007AFF" },
    { name: "Calls Made", icon: "📞", target: 5, color: "#AF52DE" },
] as const;
