import { Check, ChevronDown } from "lucide-react-native";
import React, { FC, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Option = {
  label: string;
  icon?: string;
};

interface PremiumDropdownProps {
  options?: Option[];
  defaultValue?: string;
  onSelect?: (value: string) => void;
}

const DEFAULT_OPTIONS: Option[] = [
  { label: "Latest", icon: "🕒" },
  { label: "Trending", icon: "🔥" },
];

const PremiumDropdown: FC<PremiumDropdownProps> = ({
  options = DEFAULT_OPTIONS,
  defaultValue = "Latest",
  onSelect,
}) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  const open = useSharedValue<number>(0);

  const toggle = () => {
    open.value = open.value === 0 ? withSpring(1) : withTiming(0);
  };

  const close = () => {
    open.value = withTiming(0);
  };

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(open.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  const dropdownStyle = useAnimatedStyle(() => {
    return {
      opacity: open.value,
      transform: [
        { scale: interpolate(open.value, [0, 1], [0.9, 1]) },
        { translateY: interpolate(open.value, [0, 1], [-10, 0]) },
      ],
    };
  });

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect?.(item);
    close();
  };

  return (
    <View style={styles.container}>
      {/* Backdrop */}
      {open.value === 1 && (
        <TouchableWithoutFeedback onPress={close}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
      )}

      {/* Trigger */}
      <Pressable style={styles.button} onPress={toggle}>
        <Text style={styles.buttonText}>{selected}</Text>

        <Animated.View style={rotateStyle}>
          <ChevronDown size={18} />
        </Animated.View>
      </Pressable>

      {/* Dropdown */}
      <Animated.View style={[styles.dropdown, dropdownStyle]}>
        {options.map((item) => {
          const active = item.label === selected;

          return (
            <Pressable
              key={item.label}
              style={[styles.item, active && styles.activeItem]}
              onPress={() => handleSelect(item.label)}
            >
              {item.icon && <Text style={styles.icon}>{item.icon}</Text>}

              <Text style={styles.itemText}>{item.label}</Text>

              {active && <Check size={16} color="#4f46e5" />}
            </Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default PremiumDropdown;

const styles = StyleSheet.create({
  container: {
    width: 160,
    zIndex: 100,
  },

  backdrop: {
    position: "absolute",
    top: -1000,
    bottom: -1000,
    left: -1000,
    right: -1000,
  },

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },

  dropdown: {
    position: "absolute",
    top: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },

  activeItem: {
    backgroundColor: "#eef2ff",
  },

  icon: {
    fontSize: 16,
  },

  itemText: {
    flex: 1,
    fontSize: 15,
  },
});