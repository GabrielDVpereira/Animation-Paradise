import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import list from "./list";
import Card from "./card";

export default function GoNative() {
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(selectedCard);
  return (
    <View style={{ flex: 1 }}>
      {selectedCard ? (
        <View style={{ width: "100%", height: "30%" }}>
          <ImageBackground
            resizeMode="cover"
            source={selectedCard.image}
            style={{
              width: "100%",
              height: "100%",
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
              {selectedCard.name}
            </Text>
          </ImageBackground>
        </View>
      ) : (
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
      )}

      {selectedCard ? (
        <Card card={selectedCard} />
      ) : (
        <ScrollView>
          {list.map((card) => (
            <TouchableOpacity
              key={card.name}
              onPress={() => setSelectedCard(card)}
              activeOpacity={1}
            >
              <Card card={card} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
