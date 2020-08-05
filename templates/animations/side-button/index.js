import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
                  outputRange: [0, 0.8],
                }),
              },
            ],
          },
          styles.button,
        ]}
        onPress={toggleButtons}
        activeOpacity={1}
      >
        <AntDesign name="plus" size={24} color="#fff" />
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
      <Animated.View
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
      </Animated.View>
    </View>
  );
}

export default Button;
