import {
  Heart,
  Home,
  Plus,
  Search,
  User,
} from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const TABS = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: Heart, label: "Likes" },
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
        <TouchableOpacity style={styles.mainButton} onPress={toggle}>
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
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
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