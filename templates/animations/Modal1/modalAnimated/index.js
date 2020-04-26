import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const screenHeight = Dimensions.get("window").height;

export default function AnimatedModal({ visible, setVisible }) {
  const [top] = useState(new Animated.Value(screenHeight));
  useEffect(() => {
    animateModal();
  }, [visible]);

  function animateModal() {
    if (visible) {
      Animated.spring(top, {
        toValue: 200,
        tension: 30,
      }).start();
    } else {
      Animated.spring(top, {
        toValue: screenHeight,
      }).start();
    }
  }
  return (
    <Animated.View style={[{ top }, styles.container]}>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={{ position: "absolute", right: 15, top: 10 }}
      >
        <Feather name="x-circle" color="#E47171" size={26} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "montserrat-medium",
          alignSelf: "center",
          marginTop: 40,
          fontSize: 20,
        }}
      >
        Welcome to Animation Paradise!
      </Text>
      <Image
        source={require("../../../../assets/images/sunset.jpg")}
        style={{
          width: "90%",
          height: 350,
          alignSelf: "center",
          resizeMode: "contain",
        }}
      />
    </Animated.View>
  );
}
