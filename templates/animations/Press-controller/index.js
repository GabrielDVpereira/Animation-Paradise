import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  Easing,
  timing,
  interpolate,
  useCode,
  call,
} from "react-native-reanimated";

const animatedValue = new Animated.Value(300);

const PressController = () => {
  const [rgb, setRgb] = useState(`rgb(20,242,224)`);
  const [progress, setProgress] = useState(0);

  const onGestureChange = ({ nativeEvent }) => {
    if (nativeEvent.state == State.BEGAN) {
      shrinkButton.start();
    } else if (nativeEvent.state == State.END) {
      growButton.start();
    }
  };

  const growButton = timing(animatedValue, {
    duration: 500,
    toValue: 300,
    easing: Easing.inOut(Easing.ease),
  });
  const shrinkButton = timing(animatedValue, {
    duration: 1000,
    toValue: 250,
    easing: Easing.inOut(Easing.ease),
  });

  const interporlateR = interpolate(animatedValue, {
    inputRange: [250, 300],
    outputRange: [20, 65],
  });
  const interporlateG = interpolate(animatedValue, {
    inputRange: [250, 300],
    outputRange: [242, 200],
  });
  const interporlateB = interpolate(animatedValue, {
    inputRange: [250, 300],
    outputRange: [224, 229],
  });

  const animationProgress = interpolate(animatedValue, {
    inputRange: [250, 300],
    outputRange: [100, 0],
  });

  useCode(() => {
    return call([interporlateR, interporlateG, interporlateB], (rgb) => {
      setRgb(`rgb(${rgb.join()})`);
    });
  }, [interporlateR]);

  useCode(() => {
    return call([animationProgress], ([progress]) => {
      setProgress(progress.toFixed(0));
    });
  }, [animationProgress]);

  return (
    <View style={styles.container}>
      <PanGestureHandler onHandlerStateChange={onGestureChange}>
        <Animated.View
          style={[
            styles.pressButton,
            {
              width: animatedValue,
              height: animatedValue,
              backgroundColor: rgb,
            },
          ]}
        >
          <Text style={styles.animationText}>{progress}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PressController;
