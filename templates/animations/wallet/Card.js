import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y, changed }) {
  let scaleDown = y.interpolate({
    inputRange: [210 * index, 210 * index + 600],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  let scaleUp = y.interpolate({
    inputRange: [210 * index, 210 * index + 600],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // let scale;
  // if (changed) {
  //   scale = changed.isViewable ? scaleUp : scaleDown;
  // }
  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleDown }],
        width: 350,
        height: 200,
        backgroundColor: bgColor,
        borderRadius: 20,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{index}</Text>
    </Animated.View>
  );
}
