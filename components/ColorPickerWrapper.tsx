import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PRESET_COLORS } from "../constants/colors";
import { getContrastColor } from "../utils/colors";

interface ColorPickerWrapperProps {
    selectedColor: string;
    onSelectColor: (color: string) => void;
}

export const ColorPickerWrapper: React.FC<ColorPickerWrapperProps> = ({
    selectedColor,
    onSelectColor,
}) => {
    const [showCustomPicker, setShowCustomPicker] = useState(false);
    const [tempColor, setTempColor] = useState(selectedColor);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const handleCustomColorSubmit = () => {
        onSelectColor(tempColor);
        setShowCustomPicker(false);
    };

    const handlePresetSelect = (color: string) => {
        onSelectColor(color);
        setShowCustomPicker(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.presetContainer}>
                {PRESET_COLORS.map((color) => (
                    <TouchableOpacity
                        key={color}
                        style={[
                            styles.colorOption,
                            { backgroundColor: color },
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
                    onPress={() => {
                        setTempColor(selectedColor);
                        setShowCustomPicker(!showCustomPicker);
                    }}
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
                            { color: isDark ? "#AAA" : "#666" },
                        ]}
                    >
                        Custom Color
                    </Text>

                    <View style={styles.colorInputContainer}>
                        <View
                            style={[
                                styles.colorPreview,
                                { backgroundColor: tempColor },
                            ]}
                        />
                        <Text
                            style={[
                                styles.colorText,
                                { color: isDark ? "#FFF" : "#000" },
                            ]}
                        >
                            {tempColor.toUpperCase()}
                        </Text>
                    </View>

                    <View style={styles.hexInputRow}>
                        <Text
                            style={[
                                styles.hexLabel,
                                { color: isDark ? "#AAA" : "#666" },
                            ]}
                        >
                            #
                        </Text>
                        <input
                            type="color"
                            value={tempColor}
                            onChange={(e) => setTempColor(e.target.value)}
                            style={{
                                width: "100%",
                                height: 40,
                                border: "none",
                                borderRadius: 8,
                                cursor: "pointer",
                                backgroundColor: isDark ? "#2A2A2A" : "#FFF",
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.applyButton,
                            { backgroundColor: tempColor },
                        ]}
                        onPress={handleCustomColorSubmit}
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
    colorInputContainer: {
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
    colorText: {
        fontSize: 20,
        fontWeight: "800",
        fontFamily: "monospace",
        letterSpacing: 1.5,
    },
    hexInputRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
    },
    hexLabel: {
        fontSize: 24,
        fontWeight: "800",
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
