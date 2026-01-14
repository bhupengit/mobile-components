import React from "react";
import {
  Text,
  Pressable,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
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
}

export default function button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}: ButtonProps) {

  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      style={({ pressed }) => [
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && { width: "100%" },
        isDisabled && disabledStyle,
        pressed && !isDisabled && pressedStyle,
        style,
      ]}
    >
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
