import React from "react";
import { View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ card }) {
  return (
    <View style={{ margin: 20 }}>
      <Image
        source={card.image}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      />
      <View
        style={{
          backgroundColor: card.color,
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "60%" }}>
          <Text style={{ fontFamily: "montserrat-bold", color: "#fff" }}>
            {card.name}
          </Text>
          <Text style={{ fontFamily: "montserrat-medium", color: "#fff" }}>
            {card.description}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
            flexDirection: "row",
            alignItems: "center",
            height: 0,
            padding: 12,
            alignSelf: "center",
            borderRadius: 30,
          }}
        >
          <FontAwesome name="heart" color="#fff" />
          <Text style={{ marginLeft: 5, color: "#fff" }}>{card.likes}</Text>
        </View>
      </View>
    </View>
  );
}
