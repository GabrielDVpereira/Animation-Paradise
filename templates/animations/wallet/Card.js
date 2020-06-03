import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y, visible }) {
  let scale = y.interpolate({
    inputRange: [210 * index, 210 * index + 600],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
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
