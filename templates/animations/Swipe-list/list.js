import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  FlatList,
  Dimensions,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import cardData from "./cardData.json";
import Card from "./card";
import styles from "./styles.js";
import { FontAwesome } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const top = new Animated.Value(200);
const listTranslation = new Animated.Value(0);

export default function List() {
  const [icon, setIcon] = useState("caret-up");
  const [listVisible, setListVisible] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      listTranslation.setValue(gestureState.dy);
    },
    onPanResponderRelease: (event, gestureState) => {
      setListVisible(!listVisible);
    },
  });

  useEffect(() => {
    toggleList();
  }, [listVisible]);

  function toggleList() {
    setIcon("caret-down");
    if (listVisible) {
      Animated.spring(top, {
        toValue: 400,
      }).start();
    } else {
      setIcon("caret-up");
      Animated.timing(top, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }
  return (
    <Animated.View
      style={[
        styles.listContainer,
        { top, transform: [{ translateY: listTranslation }] },
      ]}
    >
      <Animated.View {...panResponder.panHandlers} style={styles.listHeader}>
        <FontAwesome name={icon} color="#fff" size={30} />
      </Animated.View>
      <View style={styles.listContent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cardData.data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <Card info={item} />}
        />
      </View>
    </Animated.View>
  );
}
