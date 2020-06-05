import React from "react";
import { View, Text } from "react-native";
import Modal from "./modal";
export default function BlurBackground() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal />
      <Text style={{ fontFamily: "montserrat-medium", fontSize: 20 }}>
        This is gonna be a blur background
      </Text>
    </View>
  );
}
