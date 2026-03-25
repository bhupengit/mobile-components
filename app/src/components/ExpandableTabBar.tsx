import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import {
  Plus,
  Home,
  Search,
  Heart,
  User,
} from "lucide-react-native";

const { width } = Dimensions.get("window");

const TABS = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Find" },
  { icon: Heart, label: "Like" },
  { icon: User, label: "Profile" },
];

export default function ExpandableTabBar() {
  const open = useSharedValue(0);

  const toggle = () => {
    open.value = open.value === 0 ? withSpring(1) : withTiming(0);
  };

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: open.value,
    pointerEvents: open.value === 0 ? "none" : "auto",
  }));

  return (
    <>
      {/* Backdrop */}
      <Animated.View style={[styles.backdrop, backdropStyle]} />

      {/* Floating Tab Bar */}
      <View style={styles.container}>
        {/* Expandable Icons */}
        {TABS.map((tab, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const translateY = interpolate(
              open.value,
              [0, 1],
              [0, -(index + 1) * 60]
            );

            const scale = interpolate(open.value, [0, 1], [0, 1]);

            return {
              transform: [{ translateY }, { scale }],
              opacity: open.value,
            };
          });

          const Icon = tab.icon;

          return (
            <Animated.View key={index} style={[styles.floatingItem, animatedStyle]}>
              <Pressable style={styles.item}>
                <Icon size={22} color="#fff" />
              </Pressable>
            </Animated.View>
          );
        })}

        {/* Main Button */}
        <Pressable style={styles.mainButton} onPress={toggle}>
          <Animated.View
            style={useAnimatedStyle(() => ({
              transform: [
                {
                  rotate: `${interpolate(open.value, [0, 1], [0, 45])}deg`,
                },
              ],
            }))}
          >
            <Plus size={26} color="#fff" />
          </Animated.View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  container: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    alignItems: "center",
  },

  mainButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  floatingItem: {
    position: "absolute",
    bottom: 0,
  },

  item: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});