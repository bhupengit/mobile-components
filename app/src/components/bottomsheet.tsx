import React, { forwardRef, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const PremiumBottomSheet = forwardRef<BottomSheet, Props>(
  ({ title = "Options", children }, ref) => {
    const snapPoints = useMemo(() => ["25%", "55%", "90%"], []);

    const renderBackdrop = (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.35}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
      />
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.background}
      >
        <BlurView intensity={40} tint="light" style={styles.blurContainer}>
          {/* Sticky Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
          </View>

          {/* Scrollable Content */}
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >
            {children}
          </BottomSheetScrollView>
        </BlurView>
      </BottomSheet>
    );
  }
);

export default PremiumBottomSheet;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "transparent",
  },

  blurContainer: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: "hidden",
  },

  indicator: {
    backgroundColor: "#d1d5db",
    width: 40,
  },

  header: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  content: {
    padding: 20,
    gap: 16,
  },
});