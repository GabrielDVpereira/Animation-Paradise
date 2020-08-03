import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Animated, { Easing, timing } from "react-native-reanimated";

import styles from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);
const translateY = new Animated.Value(0);

const showButtonConfig = {
  duration: 150,
  toValue: 100,
  easing: Easing.inOut(Easing.ease),
};

const hideButtonConfig = {
  duration: 150,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
};

function Button() {
  const [isButtonsShow, setButtonsShow] = useState(false);
  const [buttonTextVisible, setButtonTextVisible] = useState(false);

  const showButtons = () => {
    setButtonTextVisible(true);
    timing(translateY, showButtonConfig).start();
  };
  const hideButtons = () => {
    setButtonTextVisible(false);
    timing(translateY, hideButtonConfig).start();
  };

  const toggleButtons = () => {
    if (isButtonsShow) {
      hideButtons();
      setButtonsShow(false);
    } else {
      showButtons();
      setButtonsShow(true);
    }
  };

  return (
    <View style={styles.container}>
      <ButtonAnimated
        style={[
          {
            transform: [
              {
                rotate: translateY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, 1.5],
                }),
              },
            ],
          },
          styles.button,
        ]}
        onPress={toggleButtons}
      >
        <Text style={{ color: "#fff" }}>X</Text>
      </ButtonAnimated>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -100],
                }),
              },
            ],
          },
          styles.hiddenButtonView,
        ]}
      >
        {buttonTextVisible && <Text>Test</Text>}
        <TouchableOpacity style={styles.hiddenButton1} />
      </Animated.View>
      <ButtonAnimated
        style={[
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
          styles.hiddenButtonView,
        ]}
      >
        {buttonTextVisible && <Text>Test</Text>}
        <TouchableOpacity style={styles.hiddenButton2} />
      </ButtonAnimated>
    </View>
  );
}

export default Button;
