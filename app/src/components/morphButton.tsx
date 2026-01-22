import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    runOnJS,
  } from "react-native-reanimated";
  import { Pressable, Text, ActivityIndicator } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { useState } from "react";
  
  export function MorphButton() {
    const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  
    const width = useSharedValue(260);
    const radius = useSharedValue(12);
    const contentOpacity = useSharedValue(1);
  
    const animatedStyle = useAnimatedStyle(() => ({
      width: width.value,
      borderRadius: radius.value,
    }));
  
    const contentStyle = useAnimatedStyle(() => ({
      opacity: contentOpacity.value,
    }));
  
    const onPress = () => {
      setState("loading");
  
      contentOpacity.value = withTiming(0, { duration: 150 });
      width.value = withTiming(56, { duration: 300 });
      radius.value = withTiming(28, { duration: 300 });
  
      setTimeout(() => {
        setState("success");
      }, 1500);
    };
  
    return (
      <Pressable onPress={onPress}>
        <Animated.View
          style={[
            {
              height: 56,
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
  