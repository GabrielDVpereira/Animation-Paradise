import React from "react";
import { View, Animated } from "react-native";
import cardColors from "./cardColors";
import Card from "./Card";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function AnimatedCards() {
  const moveCards = new Animated.Value(0);
  const transalateCardsY = Animated.event([
    {
      nativeEvent: {
        translationY: moveCards,
      },
    },
  ]);

  function renderCards(numberOfCards) {
    let cards = [];
    for (let i = 0; i < numberOfCards; i++) {
      const bgColor = cardColors[Math.floor(Math.random() * cardColors.length)];
      cards.push(<Card key={i} bgColor={bgColor} />);
    }

    return cards;
  }

  return (
    <PanGestureHandler
      onGestureEvent={transalateCardsY}
      onHandlerStateChange={({ nativeEvent }) => console.log(nativeEvent)}
    >
      <Animated.View
        style={{
          alignItems: "center",
          transform: [{ translateY: moveCards }],
        }}
      >
        {renderCards(10)}
      </Animated.View>
    </PanGestureHandler>
  );
}
