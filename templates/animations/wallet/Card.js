import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y, visible }) {
  let scale = y.interpolate({
    inputRange: [210 * index, 210 * index + 210],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  let translateY = y.interpolate({
    inputRange: [0, 210 * index + 210],
    outputRange: [0, -(210 * index)],
    extrapolateRight: "clamp",
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale }, { translateY }],
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
