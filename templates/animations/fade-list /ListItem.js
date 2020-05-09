import React from "react";
import { Image, View, Text } from "react-native";

export default function Item({ image }) {
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
        source={{ uri: image.url }}
        style={{ width: 100, height: 100, margin: 5 }}
      />
      <Text
        style={{
          marginLeft: 20,
          fontFamily: "montserrat-medium",
          fontSize: 16,
          alignSelf: "center",
        }}
      >
        {image.text}
      </Text>
    </View>
  );
}
