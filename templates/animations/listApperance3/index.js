import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import generateFakeData from "../../utils/factory/infoFactory";
import Card from "./card";

const data = generateFakeData(10);

export default function ListApperance() {
  const translateY = new Animated.Value(100);

  useEffect(() => {
    Animated.timing(translateY, {
      duration: 700,
      toValue: 0,
      easing: Easing.quad,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.ScrollView
      style={{
        transform: [{ translateY }],
        opacity: translateY.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      }}
      contentContainerStyle={{
        padding: 20,
      }}
    >
      {data.map((item, i) => (
        <Card key={i} item={item} index={i} />
      ))}
    </Animated.ScrollView>
  );
}
