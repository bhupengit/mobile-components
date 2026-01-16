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

export default function Dropdown({
  data,
  value,
  placeholder = "Select option",
  onChange,

  showBorder = true,
  borderColor = "#D1D5DB",
  icon,
  iconColor = "#6B7280",

  height = 48,
  width = "100%",

  disabled = false,

  containerStyle,
  textStyle,
}: DropdownProps) {

  const [visible, setVisible] = useState(false);

  const selectedItem = data.find((i) => i.value === value);

  
  return (
    <View>
      <Text>Dropdown List</Text>
    </View>
  )
}