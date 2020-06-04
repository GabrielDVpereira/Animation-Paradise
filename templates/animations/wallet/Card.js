import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y, visible }) {
  let scaleDown = y.interpolate({
    inputRange: [210 * index, 210 * index + 600],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  let invertY = y.interpolate({
    inputRange: [0, 666.7],
    outputRange: [666.7, 0],
    extrapolate: "clamp",
  });

  let scaleUp = invertY.interpolate({
    inputRange: [133 * index, 210 * index + 600],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  
  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleUp }],
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
