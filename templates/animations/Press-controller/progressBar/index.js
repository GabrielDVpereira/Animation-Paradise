import React from "react";
import Animated from "react-native-reanimated";
import { View, StyleSheet } from "react-native";

const CIRCLE_RADIUS = 150;
const initialValueHalfCircle = 0;

export default function Progress() {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle} />
      <View
        style={{
          width: CIRCLE_RADIUS * 2,
          height: CIRCLE_RADIUS * 2,
          backgroundColor: "rgb(20,242,224)",
          position: "absolute",
          left: CIRCLE_RADIUS,
          // right: CIRCLE_RADIUS,
          transform: [{ rotate: "45deg" }],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#ccc",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
});
