import React from "react";
import { Image, View, Text } from "react-native";

export default function Item({ info }) {
  const techs = ["Java", "JavaScript", "Ruby", "Python", "C & C++", "php"];
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        elevation: 1,
      }}
    >
      <Image
        source={{ uri: info.url }}
        style={{ width: 100, height: 100, margin: 5 }}
      />
      <View>
        <Text
          style={{
            marginLeft: 20,
            fontFamily: "montserrat-medium",
            fontSize: 14,
          }}
        >
          {info.name}
        </Text>
        <Text
          style={{
            marginLeft: 20,
            fontFamily: "montserrat-medium",
            fontSize: 12,
            color: "#666",
          }}
        >
          {techs[Math.floor(Math.random() * techs.length)]}
        </Text>
      </View>
    </View>
  );
}
