import React from "react";
import { View, Text } from "react-native";

export default function Card({ item, index }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        elevation: 2,
        borderRadius: 5,
        position: "relative",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#9a75f0",
          borderRadius: 10,
        }}
      />
      <Text style={{ marginLeft: 30 }}>{item.name}</Text>
    </View>
  );
}
