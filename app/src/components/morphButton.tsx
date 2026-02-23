import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";

const BUTTON_WIDTH = 260;
const BUTTON_HEIGHT = 56;
const RESET_DELAY = 3500; // ms

  
  export function MorphButton() {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  
    const width = useSharedValue(BUTTON_WIDTH);
    const radius = useSharedValue(12);
    const contentOpacity = useSharedValue(1);
  
    const animatedStyle = useAnimatedStyle(() => ({
      width: width.value,
      borderRadius: radius.value,
    }));
  
    const contentStyle = useAnimatedStyle(() => ({
      opacity: contentOpacity.value,
    }));
  
    const resetToIdle = () => {
      width.value = withTiming(BUTTON_WIDTH, { duration: 300 });
      radius.value = withTiming(12, { duration: 300 });
      contentOpacity.value = withTiming(1, { duration: 200 });
      setState("idle");
    };
  
    const onPress = () => {
      if (state !== "idle") return;
  
      setState("loading");
  
      contentOpacity.value = withTiming(0, { duration: 150 });
      width.value = withTiming(56, { duration: 300 });
      radius.value = withTiming(28, { duration: 300 });
  
      // simulate API call
      setTimeout(() => {
        setState("success");
  
        // auto reset after success
        setTimeout(() => {
          resetToIdle();
        }, RESET_DELAY);
      }, 1500);
    };
  
    return (
      <Pressable onPress={onPress}>
        <Animated.View
          style={[
            {
              height: BUTTON_HEIGHT,
              backgroundColor: "#2B6CB0",
              alignItems: "center",
              justifyContent: "center",
            },
            animatedStyle,
          ]}
        >
          {state === "idle" && (
            <Animated.View style={[{ flexDirection: "row", gap: 8 }, contentStyle]}>
              <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
                Checkout
              </Text>
              <Ionicons name="arrow-forward" size={18} color="#FFF" />
            </Animated.View>
          )}
  
          {state === "loading" && <ActivityIndicator color="#FFF" />}
  
          {state === "success" && (
            <Ionicons name="checkmark" size={28} color="#FFF" />
          )}
        </Animated.View>
      </Pressable>
    );
  }
  