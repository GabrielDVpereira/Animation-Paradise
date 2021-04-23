import React from "react";
import { View, Animated } from "react-native";
import { SCREEN_WIDTH, styles } from "./styles";

export const Item = ({ imageUri, heading, description, index, scrollx }) => {
  const inputRange = [
    (index - 1) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 1) * SCREEN_WIDTH,
  ];

  const inputRangeOpacity = [
    (index - 0.3) * SCREEN_WIDTH,
    index * SCREEN_WIDTH,
    (index + 0.3) * SCREEN_WIDTH,
  ];

  // change the image scale on scroll
  const scale = scrollx.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXHeading = scrollx.interpolate({
    inputRange,
    outputRange: [SCREEN_WIDTH * 0.1, 0, -SCREEN_WIDTH * 0.1],
  });

  const translatexDescription = scrollx.interpolate({
    inputRange,
    outputRange: [SCREEN_WIDTH * 0.7, 0, -SCREEN_WIDTH * 0.7],
  });

  const opacity = scrollx.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        source={imageUri}
        style={[styles.imageStyle, { transform: [{ scale }] }]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            { opacity, transform: [{ translateX: translateXHeading }] },
          ]}
        >
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            { opacity, transform: [{ translateX: translatexDescription }] },
          ]}
        >
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};
