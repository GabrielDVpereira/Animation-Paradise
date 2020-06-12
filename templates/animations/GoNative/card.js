import React from "react";
import { View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

export default function Card({ card }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
      <View style={[styles.cardContent, { backgroundColor: card.color }]}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{card.name}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
        <View style={styles.cardLikesContainer}>
          <FontAwesome name="heart" color="#fff" />
          <Text style={styles.cardLikes}>{card.likes}</Text>
        </View>
      </View>
    </View>
  );
}
