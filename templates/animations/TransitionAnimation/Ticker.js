import React from "react";
import { View, Text, Animated } from "react-native";
import { DATA } from "./data";
import { SCREEN_WIDTH, styles, TICKER_HEIGHT } from "./styles";

export const Ticker = ({ scrollx }) => {
  const inputRange = [-SCREEN_WIDTH, 0, SCREEN_WIDTH];
  const translateY = scrollx.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });

  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {DATA.map(({ type, key }) => {
          return (
            <Text key={key} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};
