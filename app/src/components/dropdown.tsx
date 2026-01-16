import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Modal,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

export interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  data: DropdownItem[];
  value?: string;
  placeholder?: string;
  onChange: (item: DropdownItem) => void;

  /** UI customization */
  showBorder?: boolean;
  borderColor?: string;
  icon?: React.ReactNode;
  iconColor?: string;

  height?: number;
  width?: number | string;

  disabled?: boolean;

  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export default function dropdown() {
  return (
    <View>
      <Text>Dropdown List</Text>
    </View>
  )
}