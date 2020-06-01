import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Card({ bgColor, index, y, visible }) {
  // let scale = y.interpolate({
  //   inputRange: [0, 1500],
  //   outputRange: [1, 0],
  //   extrapolate: "clamp",
  // });

  let translateY = y;
  // useEffect(() => {
  //   console.log(visible ? `${index} visible` : `${index} not visible`);
  // }, [visible]);

  return (
    <Animated.View
      style={{
        // transform: visible == false ? [{ scale }, { translateY }] : null,
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
