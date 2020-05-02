import React from "react";
import { View, Animated, Image, Dimensions, Text } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function CardBehind({
  image,
  cardBehindScale,
  cardBehindoOpacity,
}) {
  return (
    <Animated.View
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT - 120,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: [{ scale: cardBehindScale }],
        opacity: cardBehindoOpacity,
      }}
    >
      <Text style={{ position: "absolute", top: 100 }}>Card behind</Text>
      <Image
        source={image.uri}
        style={{
          resizeMode: "cover",
          flex: 1,
          borderRadius: 20,
          width: "90%",
        }}
      />
    </Animated.View>
  );
}
