import React, { useEffect } from "react";
import { View, Text, Animated, Dimensions, Easing } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Card({ item, index }) {
  const translateX = new Animated.Value(-SCREEN_WIDTH);

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
  };

  useEffect(() => {
    sleep(50 * index).then(() => {
      Animated.timing(translateX, {
        duration: 300,
        toValue: 1,
        easing: Easing.quad,
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
        transform: [{ translateX }],
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
