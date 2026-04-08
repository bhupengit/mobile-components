import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

interface Props {
  onFinish: () => void;
}

export default function AnimatedSplash({ onFinish }: Props) {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const loaderOpacity = useSharedValue(0);

  useEffect(() => {
    // Logo animation
    scale.value = withSequence(
      withTiming(1.2, { duration: 600 }),
      withSpring(1)
    );

    opacity.value = withTiming(1, { duration: 800 });

    // Text reveal
    setTimeout(() => {
      textOpacity.value = withTiming(1, { duration: 500 });
    }, 500);

    // Loader fade in
    setTimeout(() => {
      loaderOpacity.value = withTiming(1, { duration: 400 });
    }, 900);

    // Finish after delay
    setTimeout(() => {
      runOnJS(onFinish)();
    }, 2200);
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [
      {
        translateY: interpolate(textOpacity.value, [0, 1], [10, 0]),
      },
    ],
  }));

  const loaderStyle = useAnimatedStyle(() => ({
    opacity: loaderOpacity.value,
  }));

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Animated.View style={[styles.logo, logoStyle]}>
        <Text style={styles.logoText}>🚀</Text>
      </Animated.View>

      {/* App Name */}
      <Animated.Text style={[styles.title, textStyle]}>
        MyApp
      </Animated.Text>

      {/* Loader */}
      <Animated.View style={[styles.loader, loaderStyle]}>
        <Text style={styles.loaderText}>Loading...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: "#4f46e5",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontSize: 40,
  },

  title: {
    fontSize: 28,
    color: "#fff",
    marginTop: 20,
    fontWeight: "600",
  },

  loader: {
    position: "absolute",
    bottom: 80,
  },

  loaderText: {
    color: "#94a3b8",
  },
});