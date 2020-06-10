import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import list from "./list";

export default function GoNative() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: "30%",
          marginTop: 0,
          backgroundColor: "#38b0de",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontFamily: "montserrat-bold",
            fontSize: 26,
            margin: 20,
            color: "#fff",
          }}
        >
          GoNative
        </Text>
      </View>
      <ScrollView>
        {list.map((card) => (
          <View key={card.name} style={{ margin: 20 }}>
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
                <Text>{card.name}</Text>
                <Text>{card.description}</Text>
              </View>
              <Text>{card.likes}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
