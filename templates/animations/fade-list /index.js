import React, { useState, useRef } from "react";
import imageFactory from "../../utils/factory/imageFactory";
import ListItem from "./ListItem";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";

export default function List() {
  const images = useRef(imageFactory(10)).current;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animation Paradise!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Dumb Button</Text>
      </TouchableOpacity>

      <FlatList
        data={images}
        keyExtractor={(image) => image.text}
        renderItem={({ item: image }) => <ListItem image={image} />}
      />
    </View>
  );
}
