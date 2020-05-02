import React from "react";
import { View, Animated, Image, Dimensions, Text } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function FirstCard({
  panGesture,
  cardMoviment,
  cardRotation,
  image,
}) {
  console.log("Card moviment first card", cardMoviment);
  return (
    <Animated.View
      {...panGesture.panHandlers}
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT - 120,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        transform: [
          ...cardMoviment.getTranslateTransform(),
          { rotate: cardRotation },
        ],
      }}
    >
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
