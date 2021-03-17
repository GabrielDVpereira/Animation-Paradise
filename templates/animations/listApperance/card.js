import React, { useEffect } from "react";
import { View, Text, Animated, Dimensions, Easing } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Card({ item, index }) {
  const translateX = new Animated.Value(-SCREEN_WIDTH);

  useEffect(() => {
    Animated.timing(translateX, {
      duration: 100 * (index + 1),
      toValue: 0,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
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
          backgroundColor: "#ccc",
          borderRadius: 10,
        }}
      />
      <Text style={{ marginLeft: 30 }}>{item.name}</Text>
    </Animated.View>
  );
}
