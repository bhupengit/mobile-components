import React, { useEffect, useRef } from "react";
import {
  Animated,
  DimensionValue,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
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
  width?: DimensionValue;

  activeColor?: string;
  inactiveColor?: string;
  borderColor?: string;
  backgroundColor?: string;

  indicatorStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export function ToggleGroup<T extends ToggleValue>({
  items,
  value,
  onChange,

  variant = "pill",
  height = 44,
  width = "100%",

  activeColor = "#3B82F6",
  inactiveColor = "#6B7280",
  borderColor = "#E5E7EB",
  backgroundColor = "#F3F4F6",
  indicatorStyle,
  containerStyle,
  textStyle,
}: ToggleGroupProps<T>) {
  const translateX = useRef(new Animated.Value(0)).current;
  const itemWidth = useRef(0);

  const activeIndex = items.findIndex((i) => i.value === value);

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: activeIndex * itemWidth.current,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const onLayout = (e: LayoutChangeEvent) => {
    itemWidth.current = e.nativeEvent.layout.width / items.length;
  };

  return (
    <View
      onLayout={onLayout}
      style={[
        styles.container,
        {
          height,
          width,
          backgroundColor: variant === "outline" ? "transparent" : backgroundColor,
          borderWidth: variant === "outline" ? 1 : 0,
          borderColor,
        },
        containerStyle,
      ]}
    >
      {/* Active indicator */}
      {variant !== "outline" && (
        <Animated.View
          style={[
            styles.indicator,
            {
              width: `${100 / items.length}%`,
              backgroundColor: activeColor,
              transform: [{ translateX }],
            },
            indicatorStyle
          ]}
        />
      )}

      {items.map((item) => {
        const isActive = item.value === value;

        return (
          <Pressable
            key={String(item.value)}
            style={styles.item}
            onPress={() => onChange(item.value)}
          >
            {item.icon}
            <Text
              style={[
                styles.text,
                {
                  color:
                    variant === "outline"
                      ? isActive
                        ? activeColor
                        : inactiveColor
                      : isActive
                      ? "#FFFFFF"
                      : inactiveColor,
                },
                textStyle,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 999,
    overflow: "hidden",
  },
  indicator: {
    position: "absolute",
    top: 2,
    bottom: 2,
    left: 2,
    borderRadius: 999,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
