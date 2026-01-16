import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
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
          { height: height as number, width: width as number, borderWidth: showBorder ? 1 : 0, borderColor },
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
          <View style={[styles.listContainer, { width: width as number }]}>
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



/* ---------------- styles ---------------- */

const styles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 16,
    color: "#111827",
  },
  placeholder: {
    color: "#9CA3AF",
  },
  disabled: {
    opacity: 0.5,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    maxHeight: 250,
    paddingVertical: 8,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
    color: "#111827",
  },
});