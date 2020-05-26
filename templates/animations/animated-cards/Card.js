import React from "react";
import { View } from "react-native";

export default function Card({ bgColor }) {
  return (
    <View
      style={{
        width: 350,
        height: 200,
        backgroundColor: bgColor,
        borderRadius: 20,
        marginTop: 10,
      }}
    />
  );
}
