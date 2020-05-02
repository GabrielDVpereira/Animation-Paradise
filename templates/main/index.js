import React from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import components from "../Routes/components";
import styles from "./styles";

export default function Main({ navigation }) {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require("../../assets/images/paradise.jpg")}
    >
      <View style={styles.animationList}>
        <FlatList
          data={components}
          keyExtractor={(item) => {
            return item.name;
          }}
          renderItem={({ item: componet }) => (
            <TouchableOpacity
              key={componet.name}
              style={styles.animation}
              onPress={() => navigation.navigate(componet.name)}
            >
              <Text style={styles.animationTitle}>{componet.name}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Go to animation</Text>
                <Feather name="arrow-right" color="#696969" size={16} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
