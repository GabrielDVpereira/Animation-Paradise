import React from "react";
import { View, Text } from "react-native";
import List from "./list";
import styles from "./styles";

export default function Container() {
  return (
    <View style={styles.container}>
      <Text>Swipe to see the list</Text>
      <List />
    </View>
  );
}
