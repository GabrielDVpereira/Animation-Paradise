import React, { useEffect } from "react";
import { View, Text, Animated, Dimensions, Easing } from "react-native";

export default function Card({ item, index }) {
  const opacity = new Animated.Value(0);

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  };

  useEffect(() => {
    sleep(50 * index).then(() => {
      Animated.timing(opacity, {
        duration: 500,
        toValue: 1,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
  }, []);
  return (
    <Animated.View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        elevation: 2,
        borderRadius: 5,
        position: "relative",
        opacity: opacity,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#9a75f0",
          borderRadius: 10,
        }}
      />
      <Text style={{ marginLeft: 30 }}>{item.name}</Text>
    </Animated.View>
  );
}
