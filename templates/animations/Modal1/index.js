import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from "./styles";
import AnimatedModal from "./modalAnimated";

export default function ModalContainer() {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    animateContainer();
  }, [modalVisible]);

  function animateContainer() {
    if (modalVisible) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.spring(opacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      Animated.spring(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Animated.View
        style={[
          {
            transform: [{ scale }],
            borderRadius: scale.interpolate({
              inputRange: [0.9, 1],
              outputRange: [20, 0],
            }),
            opacity,
          },
          styles.container,
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonText}>Open Modal</Text>
        </TouchableOpacity>
      </Animated.View>
      <AnimatedModal visible={modalVisible} setVisible={setModalVisible} />
    </View>
  );
}
