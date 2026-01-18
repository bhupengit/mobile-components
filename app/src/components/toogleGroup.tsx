import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

export type ToggleValue = string | number;

export interface ToggleItem<T extends ToggleValue = string> {
  label: string;
  value: T;
  icon?: React.ReactNode;
}

export type ToggleVariant = "pill" | "outline" | "solid";

export interface ToggleGroupProps<T extends ToggleValue = string> {
  items: ToggleItem<T>[];
  value: T;
  onChange: (value: T) => void;

  variant?: ToggleVariant;
  height?: number;
  width?: number | string;

  activeColor?: string;
  inactiveColor?: string;
  borderColor?: string;
  backgroundColor?: string;

  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

