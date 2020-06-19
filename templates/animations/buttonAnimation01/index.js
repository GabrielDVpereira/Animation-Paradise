import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const screen_width = Dimensions.get("window").width;

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
        style={{
          opacity: animationProgress,
          position: "absolute",
          zIndex: 1,
          width: "100%",
          marginTop: 120,
          width: screen_width * 0.9,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="bell-circle-outline"
          size={40}
          color="#ccc"
        />
      </Animated.View>

      <Animated.View
        style={{
          marginTop: 120,
          flexDirection: "row",
          justifyContent: "space-between",
          width: animationProgress.interpolate({
            inputRange: [0, 1],
            outputRange: [screen_width * 0.75, screen_width * 0.9],
          }),
          alignSelf: "center",
          zIndex: 2,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 5,
            width: 150,
            backgroundColor: iconVisible ? "#ccc" : "#38b0de",
            justifyContent: "center",
            borderRadius: 20,
            alignItems: "center",
          }}
          onPress={() => setIconVisible(!iconVisible)}
        >
          <Feather
            name={iconVisible ? "check" : "plus"}
            size={20}
            color="#fff"
          />
          <Text style={{ color: "#fff", marginLeft: 3 }}>Seguir</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            flexDirection: "row",
            padding: 5,
            width: 150,
            borderRadius: 20,
            borderColor: "#38b0de",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="chat" size={24} color="#38b0de" />
          <Text style={{ color: "#38b0de", marginLeft: 5 }}>Conversar</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
