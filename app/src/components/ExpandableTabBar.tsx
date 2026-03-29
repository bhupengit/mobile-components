import {
  Heart,
  Home,
  Plus,
  Search,
  User,
  X,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Tab = "dashboard" | "profile";

export default function ExpandableTabBar() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const open = useSharedValue(0);

  const toggle = () => {
    open.value = open.value === 0 ? withSpring(1) : withSpring(0);
  };

  const menuStyle = useAnimatedStyle(() => ({
    opacity: open.value,
    transform: [
      {
        translateY: interpolate(open.value, [0, 1], [20, -60]),
      },
    ],
  }));

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${interpolate(open.value, [0, 1], [0, 45])}deg`,
      },
    ],
  }));

  return (
    <View style={styles.wrapper}>
      {/* Expandable Menu */}
      <Animated.View style={[styles.menu, menuStyle]}>
        <Pressable style={styles.menuItem}>
          <Search color="#fff" size={20} />
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Heart color="#fff" size={20} />
        </Pressable>
      </Animated.View>

      {/* Tab Bar */}
      <View style={styles.container}>
        {/* Home */}
        <Pressable onPress={() => setActiveTab("home")}>
          <Home
            size={24}
            color={activeTab === "home" ? "#4f46e5" : "#999"}
          />
        </Pressable>

        {/* Center Expand Button */}
        <Pressable style={styles.centerButton} onPress={toggle}>
          <Animated.View style={rotateStyle}>
            {open.value ? (
              <X size={26} color="#fff" />
            ) : (
              <Plus size={26} color="#fff" />
            )}
          </Animated.View>
        </Pressable>

        {/* Profile */}
        <Pressable onPress={() => setActiveTab("profile")}>
          <User
            size={24}
            color={activeTab === "profile" ? "#4f46e5" : "#999"}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingBottom: 10, 
  },

  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },

  menu: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    gap: 12,
  },

  menuItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
});