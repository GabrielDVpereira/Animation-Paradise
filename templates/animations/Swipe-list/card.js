import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function Card({ info }) {
  return (
    <View style={styles.cardContainer}>
      <Text>{info}</Text>
    </View>
  );
}
