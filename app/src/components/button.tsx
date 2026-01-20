import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradient?: readonly [string, string, ...string[]];
  gradientDirection?: {
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  gradient,
  gradientDirection = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  style,
  textStyle,
}: ButtonProps) {

  const isDisabled = disabled || loading;
  const Wrapper = gradient ? LinearGradient : React.Fragment;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      style={({ pressed }) => [
        baseStyle,
        !gradient && variantStyles[variant],
        sizeStyles[size],
        fullWidth && { width: "100%" },
        isDisabled && disabledStyle,
        pressed && !isDisabled && pressedStyle,
        style,
      ]}
    >
      {gradient ? (
        <LinearGradient
          colors={gradient}
          start={gradientDirection.start}
          end={gradientDirection.end}
          style={styles.gradient}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>
              {leftIcon}
              <Text
                style={[
                  textBaseStyle,
                  styles.gradientText,
                  textSizeStyles[size],
                  textStyle,
                ]}
              >
                {title}
              </Text>
              {rightIcon}
            </>
          )}
        </LinearGradient>
      ) : (
        <>
          {loading ? (
            <ActivityIndicator color={getLoaderColor(variant)} />
          ) : (
            <>
              {leftIcon && <>{leftIcon}</>}
              <Text
                style={[
                  textBaseStyle,
                  textVariantStyles[variant],
                  textSizeStyles[size],
                  textStyle,
                ]}
              >
                {title}
              </Text>
              {rightIcon && <>{rightIcon}</>}
            </>
          )}
        </>
      )}
    </Pressable>
  )
}

/* ---------------- styles ---------------- */

const baseStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  borderRadius: 12,
};

const pressedStyle: ViewStyle = {
  transform: [{ scale: 0.97 }],
  opacity: 0.9,
};

const disabledStyle: ViewStyle = {
  opacity: 0.5,
};


const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: "#2563EB",
  },
  secondary: {
    backgroundColor: "#111827",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#2563EB",
    backgroundColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
  },
};

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  sm: { paddingVertical: 8, paddingHorizontal: 14 },
  md: { paddingVertical: 12, paddingHorizontal: 18 },
  lg: { paddingVertical: 16, paddingHorizontal: 22 },
};

const textBaseStyle: TextStyle = {
  fontWeight: "600",
};

const textVariantStyles: Record<ButtonVariant, TextStyle> = {
  primary: { color: "#FFFFFF" },
  secondary: { color: "#FFFFFF" },
  outline: { color: "#2563EB" },
  ghost: { color: "#2563EB" },
};

const textSizeStyles: Record<ButtonSize, TextStyle> = {
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
};

const getLoaderColor = (variant: ButtonVariant) =>
  variant === "primary" || variant === "secondary" ? "#FFFFFF" : "#2563EB";

const styles = {
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    height: "100%",
    borderRadius: 12,
    padding: 12
  } as ViewStyle,

  gradientText: {
    color: "#FFFFFF",
    fontWeight: "600",
  } as TextStyle,
};