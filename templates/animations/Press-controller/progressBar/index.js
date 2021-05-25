import React from "react";
import Animated, { timing, interpolateNode } from "react-native-reanimated";
import { View, StyleSheet } from "react-native";

const CIRCLE_RADIUS = 150;
const initialValueHalfCircle = 0;

export default function Progress() {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle} />
      <View
        style={{
          width: CIRCLE_RADIUS,
          height: CIRCLE_RADIUS * 2,
          borderRadius: CIRCLE_RADIUS,
          backgroundColor: "rgb(20,242,224)",
          position: "absolute",
          left: 0,
          top: 0,
          transform: [
            { rotate: "45deg" },
            { translateX: -22 },
            { translateY: -53 },
          ],
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <View
        style={{
          width: CIRCLE_RADIUS,
          height: CIRCLE_RADIUS * 2,
          borderRadius: CIRCLE_RADIUS,
          backgroundColor: "red",
          position: "absolute",
          left: 0,
          top: 0,

          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
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
