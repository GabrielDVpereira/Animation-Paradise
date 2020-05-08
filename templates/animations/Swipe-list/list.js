import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Animated,
  FlatList,
  Dimensions,
  PanResponder,
} from "react-native";
import cardData from "./cardData.json";
import Card from "./card";
import styles from "./styles.js";
import { FontAwesome } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const height = new Animated.Value(0);

export default function List() {
  const [icon, setIcon] = useState("caret-up");
  const [listVisible, setListVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.moveY > 150 && gestureState.moveY < SCREEN_HEIGHT)
        height.setValue(SCREEN_HEIGHT - gestureState.moveY);
    },
    onPanResponderRelease: (event, gestureState) => {
      const panHorizontalGesture = SCREEN_HEIGHT - gestureState.moveY;
      if (panHorizontalGesture < 300 && gestureState.dy > 0) {
        //scroll to close
        setListVisible(false);
        setShouldAnimate(true);
      } else if (panHorizontalGesture < 300 && gestureState.dy < 0) {
        //scroll to open
        setListVisible(true);
        setShouldAnimate(true);
      } else if (gestureState.dy == 0) {
        setListVisible(!listVisible);
        setShouldAnimate(true);
      } else if (panHorizontalGesture > 300 && gestureState.dy < 0) {
        setListVisible(true);
      }
    },
  });

  useEffect(() => {
    if (listVisible) {
      setIcon("caret-down");
    } else {
      setIcon("caret-up");
    }
    if (shouldAnimate) {
      toggleList();
    }
  }, [listVisible]);

  function toggleList() {
    if (listVisible) {
      Animated.spring(height, {
        toValue: 300,
      }).start(() => {
        setShouldAnimate(false);
      });
    } else {
      Animated.timing(height, {
        toValue: 0,
        duration: 300,
      }).start(() => {
        setShouldAnimate(false);
      });
    }
  }
  return (
    <View style={[styles.listContainer, { bottom: 0 }]}>
      <Animated.View {...panResponder.panHandlers} style={styles.listHeader}>
        <FontAwesome name={icon} color="#fff" size={30} />
      </Animated.View>
      <Animated.View style={[styles.listContent, { height }]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cardData.data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <Card info={item} />}
        />
      </Animated.View>
    </View>
  );
}
