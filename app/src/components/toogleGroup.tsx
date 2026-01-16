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