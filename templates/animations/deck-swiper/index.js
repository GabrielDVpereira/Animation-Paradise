import React, { useState, useRef, useEffect } from "react";
import { View, Image, Dimensions, PanResponder, Animated } from "react-native";
import FirstCard from "./cards/firstCard";
import CardBehind from "./cards/cardBehind";

import images from "./images";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Swipper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardMoviment = useRef(new Animated.ValueXY()).current;
  const cardRotation = useRef(
    cardMoviment.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-30deg", "0deg", "30deg"],
      extrapolate: "clamp",
    })
  ).current;
  const cardBehindScale = useRef(
    cardMoviment.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    })
  ).current;
  const cardBehindoOpacity = useRef(
    cardMoviment.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    })
  ).current;

  useEffect(() => {
    console.log("currentIndex", currentIndex);
    cardMoviment.setValue({ x: 0, y: 0 });
  }, [currentIndex]);

  const panGesture = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesttureState) => {
        cardMoviment.setValue({ x: gesttureState.dx, y: gesttureState.dy });
      },
      onPanResponderRelease: (event, gesttureState) => {
        if (gesttureState.dx < -150) {
          Animated.timing(cardMoviment, {
            toValue: { x: -SCREEN_WIDTH - 200, y: gesttureState.dy },
            duration: 300,
          }).start(() => {
            setCurrentIndex(currentIndex + 1);
          });
        } else if (gesttureState.dx > 150) {
          Animated.timing(cardMoviment, {
            toValue: { x: SCREEN_WIDTH + 200, y: gesttureState.dy },
            duration: 300,
          }).start(() => {
            setCurrentIndex(currentIndex + 1);
          });
        } else {
          Animated.timing(cardMoviment, {
            toValue: { x: 0, y: 0 },
            duration: 300,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      {images
        .map((image, index) => {
          if (index == currentIndex) {
            return (
              <FirstCard
                image={image}
                panGesture={panGesture}
                cardMoviment={cardMoviment}
                cardRotation={cardRotation}
                key={image.id}
              />
            );
          } else {
            return (
              <CardBehind
                image={image}
                cardBehindScale={cardBehindScale}
                cardBehindoOpacity={cardBehindoOpacity}
                key={image.id}
              />
            );
          }
        })
        .reverse()}
    </View>
  );
}
