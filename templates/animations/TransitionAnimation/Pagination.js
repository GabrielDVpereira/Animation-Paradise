import React from "react";
import { View, Animated } from "react-native";
import { styles, DOT_SIZE, SCREEN_WIDTH } from "./styles";
import { DATA } from "./data";

export const Pagination = ({ scrollx }) => {
  const inputRange = [-SCREEN_WIDTH, 0, SCREEN_WIDTH];
  const translateX = scrollx.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={styles.pagination}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          { transform: [{ translateX }], position: "absolute" },
        ]}
      />
      {DATA.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
          </View>
        );
      })}
    </View>
  );
};
