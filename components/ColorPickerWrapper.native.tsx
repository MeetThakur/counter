import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// Helper function to get contrasting text color
const getContrastColor = (hexColor: string): string => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000" : "#FFF";
};

interface ColorPickerWrapperProps {
    selectedColor: string;
    onSelectColor: (color: string) => void;
}

const PRESET_COLORS = [
    "#007AFF",
    "#34C759",
    "#FF9500",
    "#FF3B30",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#5AC8FA",
    "#4CD964",
    "#FFCC00",
    "#8E8E93",
    "#000000",
];

const EXTENDED_PALETTE = [
    // Reds
    "#FF0000",
    "#FF3333",
    "#FF6666",
    "#CC0000",
    "#990000",
    // Oranges
    "#FF6600",
    "#FF9933",
    "#FFCC00",
    "#CC7700",
    "#994400",
    // Yellows
    "#FFFF00",
    "#FFFF66",
    "#FFFFCC",
    "#CCCC00",
    "#999900",
    // Greens
    "#00FF00",
    "#33FF33",
    "#66FF66",
    "#00CC00",
    "#009900",
    "#00FFCC",
    "#33FFCC",
    "#00CCAA",
    "#009988",
    "#006655",
    // Blues
    "#0000FF",
    "#3333FF",
    "#6666FF",
    "#0000CC",
    "#000099",
    "#00CCFF",
    "#33AAFF",
    "#0099CC",
    "#006699",
    "#003366",
    // Purples
    "#9933FF",
    "#CC66FF",
    "#7700CC",
    "#550099",
    "#330066",
    // Pinks
    "#FF00FF",
    "#FF66FF",
    "#FF99CC",
    "#CC0099",
    "#990066",
    // Browns
    "#996633",
    "#CC9966",
    "#663300",
    "#997755",
    "#664422",
    // Grays
    "#FFFFFF",
    "#CCCCCC",
    "#999999",
    "#666666",
    "#333333",
    "#000000",
];

export const ColorPickerWrapper: React.FC<ColorPickerWrapperProps> = ({
    selectedColor,
    onSelectColor,
}) => {
    const [showCustomPicker, setShowCustomPicker] = useState(false);
    const [tempColor, setTempColor] = useState(selectedColor);
    const [hexInput, setHexInput] = useState(selectedColor.replace("#", ""));
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const handleApply = () => {
        onSelectColor(tempColor);
        setShowCustomPicker(false);
    };

    const handlePresetSelect = (color: string) => {
        onSelectColor(color);
        setShowCustomPicker(false);
    };

    const openCustomPicker = () => {
        setTempColor(selectedColor);
        setHexInput(selectedColor.replace("#", ""));
        setShowCustomPicker(!showCustomPicker);
    };

    const handleHexInputChange = (text: string) => {
        const cleaned = text.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
        setHexInput(cleaned);

        if (cleaned.length === 6) {
            setTempColor(`#${cleaned}`);
        }
    };

    const handlePaletteColorSelect = (color: string) => {
        setTempColor(color);
        setHexInput(color.replace("#", ""));
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: isDark ? "#AAA" : "#666" }]}>
                Preset Colors
            </Text>
            <View style={styles.presetContainer}>
                {PRESET_COLORS.map((color) => (
                    <TouchableOpacity
                        key={color}
                        style={[
                            styles.colorOption,
                            {
                                backgroundColor: color,
                                borderColor: isDark ? "#2C2C2C" : "transparent",
                            },
                            selectedColor === color && styles.selectedColor,
                        ]}
                        onPress={() => handlePresetSelect(color)}
                    />
                ))}
                <TouchableOpacity
                    style={[
                        styles.colorOption,
                        styles.customColorButton,
                        {
                            backgroundColor: isDark ? "#333" : "#F2F2F7",
                            borderColor: isDark ? "#555" : "#CCC",
                        },
                    ]}
                    onPress={openCustomPicker}
                >
                    <Ionicons
                        name="color-palette"
                        size={20}
                        color={isDark ? "#AAA" : "#666"}
                    />
                </TouchableOpacity>
            </View>

            {showCustomPicker && (
                <View
                    style={[
                        styles.customPickerContainer,
                        {
                            backgroundColor: isDark ? "#1E1E1E" : "#F9F9F9",
                            borderColor: isDark ? "#2C2C2C" : "rgba(0,0,0,0.1)",
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.label,
                            { color: isDark ? "#ABABAB" : "#666" },
                        ]}
                    >
                        Custom Color
                    </Text>

                    <View style={styles.previewContainer}>
                        <View
                            style={[
                                styles.colorPreview,
                                { backgroundColor: tempColor },
                            ]}
                        />
                        <View style={styles.hexInputWrapper}>
                            <Text
                                style={[
                                    styles.hashSymbol,
                                    { color: isDark ? "#ABABAB" : "#666" },
                                ]}
                            >
                                #
                            </Text>
                            <TextInput
                                style={[
                                    styles.hexInput,
                                    {
                                        backgroundColor: isDark
                                            ? "#2A2A2A"
                                            : "#FFF",
                                        color: isDark ? "#FFF" : "#000",
                                        borderColor: isDark
                                            ? "#2C2C2C"
                                            : "#DDD",
                                    },
                                ]}
                                value={hexInput}
                                onChangeText={handleHexInputChange}
                                placeholder="000000"
                                placeholderTextColor={isDark ? "#666" : "#999"}
                                maxLength={6}
                                autoCapitalize="characters"
                            />
                        </View>
                    </View>

                    <Text
                        style={[
                            styles.paletteLabel,
                            { color: isDark ? "#ABABAB" : "#666" },
                        ]}
                    >
                        Color Palette
                    </Text>
                    <View style={styles.extendedPalette}>
                        {EXTENDED_PALETTE.map((color, index) => (
                            <TouchableOpacity
                                key={`${color}-${index}`}
                                style={[
                                    styles.paletteColor,
                                    { backgroundColor: color },
                                    tempColor.toUpperCase() ===
                                    color.toUpperCase() &&
                                    styles.selectedPaletteColor,
                                ]}
                                onPress={() => handlePaletteColorSelect(color)}
                            />
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.applyButton,
                            { backgroundColor: tempColor },
                        ]}
                        onPress={handleApply}
                    >
                        <Text
                            style={[
                                styles.applyButtonText,
                                { color: getContrastColor(tempColor) },
                            ]}
                        >
                            Apply Custom Color
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 12,
        textTransform: "uppercase",
        letterSpacing: 0.8,
        opacity: 0.6,
    },
    presetContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 16,
    },
    colorOption: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 3,
        borderColor: "transparent",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    selectedColor: {
        borderWidth: 4,
        borderColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 8,
        transform: [{ scale: 1.1 }],
    },
    customColorButton: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderStyle: "dashed",
    },
    customPickerContainer: {
        padding: 24,
        borderRadius: 20,
        marginTop: 20,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
        elevation: 4,
    },
    previewContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 20,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "rgba(0,0,0,0.03)",
    },
    colorPreview: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    hexInputWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    hashSymbol: {
        fontSize: 28,
        fontWeight: "900",
    },
    hexInput: {
        flex: 1,
        padding: 14,
        borderRadius: 12,
        fontSize: 18,
        fontFamily: "monospace",
        borderWidth: 2,
        fontWeight: "700",
        letterSpacing: 1,
    },
    paletteLabel: {
        fontSize: 13,
        fontWeight: "900",
        marginBottom: 16,
        marginTop: 8,
        textTransform: "uppercase",
        letterSpacing: 0.8,
        opacity: 0.6,
    },
    extendedPalette: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 24,
        padding: 12,
        borderRadius: 12,
        backgroundColor: "rgba(0,0,0,0.02)",
    },
    paletteColor: {
        width: 44,
        height: 44,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.1)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    selectedPaletteColor: {
        borderWidth: 4,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        transform: [{ scale: 1.15 }],
    },
    applyButton: {
        padding: 18,
        borderRadius: 16,
        alignItems: "center",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    applyButtonText: {
        fontSize: 17,
        fontWeight: "800",
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
});
