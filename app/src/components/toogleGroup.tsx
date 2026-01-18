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