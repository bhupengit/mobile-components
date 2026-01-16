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
    <>
      {/* Trigger */}
      <Pressable
        disabled={disabled}
        onPress={() => setVisible(true)}
        style={[
          styles.trigger,
          {
            height,
            width,
            borderWidth: showBorder ? 1 : 0,
            borderColor,
          },
          disabled && styles.disabled,
          containerStyle,
        ]}
      >
        <Text
          style={[
            styles.text,
            !selectedItem && styles.placeholder,
            textStyle,
          ]}
        >
          {selectedItem?.label ?? placeholder}
        </Text>

        <View style={{ marginLeft: 8 }}>
          {icon ?? (
            <Text style={{ color: iconColor, fontSize: 16 }}>⌄</Text>
          )}
        </View>
      </Pressable>

      {/* Dropdown list */}
      <Modal transparent visible={visible} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={[styles.listContainer, { width }]}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.item}
                  onPress={() => {
                    onChange(item);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  )
}