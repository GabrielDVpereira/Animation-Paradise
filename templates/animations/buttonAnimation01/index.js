import React, { useState, useEffect } from "react";
import { Text, Animated, TouchableOpacity, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
const screen_width = Dimensions.get("window").width;

import styles from "./styles";

const animationProgress = new Animated.Value(0);
export default function Button() {
  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    if (iconVisible) {
      Animated.timing(animationProgress, {
        toValue: 1,
        duration: 200,
      }).start();
    } else {
      Animated.timing(animationProgress, {
        toValue: 0,
        duration: 200,
      }).start();
    }
  }, [iconVisible]);

  return (
    <>
      <Animated.View
        style={[
          {
            opacity: animationProgress,
          },
          styles.bellIcon,
        ]}
      >
        <MaterialCommunityIcons
          name="bell-circle-outline"
          size={40}
          color="#ccc"
        />
      </Animated.View>

      <Animated.View
        style={[
          {
            width: animationProgress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen_width * 0.75, screen_width * 0.9],
            }),
          },
          styles.container,
        ]}
      >
        <TouchableOpacity
          style={[
            styles.followButton,
            { backgroundColor: iconVisible ? "#ccc" : "#38b0de" },
          ]}
          onPress={() => setIconVisible(!iconVisible)}
        >
          <Feather
            name={iconVisible ? "check" : "plus"}
            size={20}
            color="#fff"
          />
          <Text style={styles.followButtonText}>Seguir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.talkButton}>
          <MaterialIcons name="chat" size={24} color="#38b0de" />
          <Text style={styles.talkButtonText}>Conversar</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
