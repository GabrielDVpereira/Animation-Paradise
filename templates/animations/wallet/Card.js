import React from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y }) {
  console.log(y);
  let scale = y.interpolate({
    inputRange: [0, 200 * 6],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  let translateY = y;

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
