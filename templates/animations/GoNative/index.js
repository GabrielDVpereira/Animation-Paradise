import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import list from "./list";
import Card from "./card";
import styles from "./styles";

export default function GoNative() {
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(selectedCard);
  return (
    <View style={styles.container}>
      {selectedCard ? (
        <View style={styles.headerImageContainer}>
          <ImageBackground
            resizeMode="cover"
            source={selectedCard.image}
            style={styles.headerImage}
          >
            <Text style={styles.headerTitle}>{selectedCard.name}</Text>
          </ImageBackground>
        </View>
      ) : (
        <View style={styles.headerNoImage}>
          <Text style={styles.headerTitle}>GoNative</Text>
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
