import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface Props {
    onFinish: () => void;
}
export default function AnimatedSplash({ onFinish }: Props) {
    const rotation = useSharedValue(0);
    const scale = useSharedValue(1);
    const opacity = useSharedValue(0);
    const textOpacity = useSharedValue(0);
    const screenOpacity = useSharedValue(1);

    useEffect(() => {
        // Spin infinite
        rotation.value = withRepeat(
            withTiming(360, { duration: 2000 }),
            -1,
            false
        );

        // Pulse glow
        scale.value = withRepeat(
            withSpring(1.15),
            -1,
            true
        );

        opacity.value = withTiming(1, { duration: 800 });

        // Text appear
        setTimeout(() => {
            textOpacity.value = withTiming(1, { duration: 600 });
        }, 600);

        // Exit animation
        setTimeout(() => {
            screenOpacity.value = withTiming(0, { duration: 600 }, () => {
                runOnJS(onFinish)();
            });
        }, 3000);
    }, []);

    const logoStyle = useAnimatedStyle(() => ({
        transform: [
            { rotate: `${rotation.value}deg` },
            { scale: scale.value },
        ],
        opacity: opacity.value,
    }));

    const textStyle = useAnimatedStyle(() => ({
        opacity: textOpacity.value,
        transform: [
            {
                translateY: interpolate(textOpacity.value, [0, 1], [20, 0]),
            },
        ],
    }));

    const screenStyle = useAnimatedStyle(() => ({
        opacity: screenOpacity.value,
    }));

    return (
        <Animated.View style={[styles.container, screenStyle]}>
            {/* Gradient Background */}
            <LinearGradient
                colors={["#0f172a", "#1e1b4b", "#312e81"]}
                style={StyleSheet.absoluteFillObject}
            />

            {/* Particles */}
            <View style={styles.particles}>
                {[...Array(10)].map((_, i) => (
                    <Animated.View
                        key={i}
                        style={[
                            styles.particle,
                            {
                                left: Math.random() * width,
                                top: Math.random() * height,
                            },
                        ]}
                    />
                ))}
            </View>

            {/* Logo */}
            <Animated.View style={[styles.logo, logoStyle]}>
                <Text style={styles.logoText}>🚀</Text>
            </Animated.View>

            {/* Title */}
            <Animated.Text style={[styles.title, textStyle]}>
                MyApp
            </Animated.Text>

            {/* Tagline */}
            <Animated.Text style={[styles.subtitle, textStyle]}>
                Experience the future
            </Animated.Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 25,
        backgroundColor: "#4f46e5",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#6366f1",
        shadowOpacity: 0.8,
        shadowRadius: 25,
        elevation: 20,
    },

    logoText: {
        fontSize: 42,
    },

    title: {
        fontSize: 30,
        color: "#fff",
        marginTop: 24,
        fontWeight: "700",
    },

    subtitle: {
        fontSize: 14,
        color: "#c7d2fe",
        marginTop: 6,
    },

    particles: {
        ...StyleSheet.absoluteFillObject,
    },

    particle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "rgba(255,255,255,0.3)",
    },
});