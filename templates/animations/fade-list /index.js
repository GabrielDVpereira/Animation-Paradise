import React, { useState, useRef } from "react";
import imageFactory from "../../utils/factory/imageFactory";
import ListItem from "./ListItem";

import {
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

const scroll = new Animated.Value(0);
const y = new Animated.diffClamp(scroll, 0, 80);

export default function List() {
  const images = useRef(imageFactory(10)).current;

  return (
    <>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            transform: [
              {
                translateY: y.interpolate({
                  inputRange: [0, 80],
                  outputRange: [0, -80],
                }),
              },
            ],
          },
        ]}
      >
        <TextInput placeholder="serch for a dev" style={styles.textInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" color="#fff" size={22} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.listContainer,
          {
            transform: [
              {
                translateY: y.interpolate({
                  inputRange: [0, 80],
                  outputRange: [60, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={{
            zIndex: 1,
          }}
          canCancelContentTouches={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          onScroll={({ nativeEvent }) => {
            scroll.setValue(nativeEvent.contentOffset.y);
          }}
          overScrollMode="never"
        >
          {images.map((image) => (
            <ListItem key={image.text} image={image} />
          ))}
        </ScrollView>
      </Animated.View>
    </>
  );
}
