import React from "react";
import LottieView from "lottie-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";
import customFonts from "../assets/customFonts";
import styles from "./styles";

export default function Main({ navigation }) {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) return <View />;
  return (
    <View style={{ backgroundColor: "#A67B52", flex: 1 }}>
      <LottieView
        source={require("../assets/animation/3599-summer.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Animation Paradise</Text>
        <Text style={styles.subtitle}>
          A whole world of amazing animations.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("main")}
      >
        <Text style={styles.buttonText}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
}
