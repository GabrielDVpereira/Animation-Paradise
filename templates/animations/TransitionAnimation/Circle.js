import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { DATA } from "./data";
import { SCREEN_WIDTH, styles } from "./styles";

export const Circle = ({ scrollx }) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.circleContainer]}>
      {DATA.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 0.55) * SCREEN_WIDTH,
        ];
        const scale = scrollx.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              { backgroundColor: color, transform: [{ scale }], opacity },
            ]}
          />
        );
      })}
    </View>
  );
};
