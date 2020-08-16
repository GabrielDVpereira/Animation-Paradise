import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
const { timing, parallel } = Animated;

// import { Container } from './styles';

const RADIUS = 150;
const PERCENT = 100;
const DURATION = 1000;

const initialValueHalfCircle = PERCENT >= 50 ? 0 : 180;
const initialValueInnerCircle = 0;

const firstCircleAnimatedValue = new Animated.Value(initialValueHalfCircle);
const secondCircleAnimatedValue = new Animated.Value(initialValueHalfCircle);
const thirdCircleAnimatedValue = new Animated.Value(initialValueInnerCircle);

const timePerDegree = DURATION / 360;
const firstCircleColor = "rgb(20,242,224)";
const secondCircleColor = PERCENT >= 50 ? "rgb(20,242,224)" : "#ccc";

const progressIndicator = () => {
  useEffect(() => {
    if (PERCENT < 50) {
      firstAnimation();
    } else {
      secondAnimation();
    }
  }, []);

  const firstAnimation = () => {
    timing(secondCircleAnimatedValue, {
      toValue: 180 + PERCENT * 3.6,
      duration: PERCENT * 3.6 * timePerDegree,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const secondAnimation = () => {
    firstCircleAnimatedValue.setValue(initialValueHalfCircle);
    parallel([
      timing(firstCircleAnimatedValue, {
        toValue: 180,
        duration: 180 * timePerDegree,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      timing(secondCircleAnimatedValue, {
        toValue: 180 + (PERCENT - 50) * 3.6,
        duration: (180 + (PERCENT - 50) * 3.6) * timePerDegree,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      timing(thirdCircleAnimatedValue, {
        toValue: (PERCENT - 50) * 3.6,
        delay: 180 * timePerDegree,
        duration: timePerDegree * ((PERCENT - 50) * 3.6),
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };
  const renderHalf = (color, transforms = [], otherStyles = {}) => (
    <Animated.View
      style={[
        styles.half,
        { backgroundColor: color, borderColor: color },
        { width: RADIUS, height: RADIUS * 2, borderRadius: RADIUS },
        {
          transform: [
            { translateX: RADIUS / 2 },
            ...transforms,
            { translateX: -RADIUS / 2 },
            { scale: 1.004 },
          ],
        },
        otherStyles,
      ]}
    />
  );

  const rotate1 = firstCircleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1deg"],
  });
  const rotate2 = secondCircleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1deg"],
  });
  const rotate3 = thirdCircleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1deg"],
  });
  const elevation3 = thirdCircleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1],
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.outer,
          {
            height: RADIUS * 2,
            width: RADIUS * 2,
            borderRadius: RADIUS,
            backgroundColor: "#ccc",
          },
        ]}
      >
        {renderHalf(firstCircleColor, [{ rotate: rotate1 }])}
        {renderHalf(secondCircleColor, [{ rotate: rotate2 }])}
        {renderHalf("#ccc", [{ rotate: rotate3 }], {
          elevation: elevation3,
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  outer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  half: {
    position: "absolute",
    left: 0,
    top: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default progressIndicator;
