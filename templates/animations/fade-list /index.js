import React, { useState, useRef } from "react";
import imageFactory from "../../utils/factory/imageFactory";
import ListItem from "./ListItem";

import {
  View,
  Text,
  TouchableOpacity,
  PanResponder,
  Animated,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

const dy = new Animated.Value(100);

export default function List() {
  const images = useRef(imageFactory(10)).current;
  const currentOffset = useRef(0);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flexDirection: "row",
          marginTop: 10,
          height: 50,
          elevation: 2,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="serch for a dev"
          style={{
            backgroundColor: "#f5f5f5",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            flex: 5,
            paddingHorizontal: 10,
            fontSize: 20,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#0066ff",
            flex: 1,
            alignItems: "center",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            justifyContent: "center",
          }}
        >
          <Feather name="search" color="#fff" size={22} />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        contentContainerStyle={{ zIndex: 1 }}
        canCancelContentTouches={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        onScroll={({ nativeEvent }) => {
          console.log(nativeEvent.contentOffset.y - currentOffset.current);
        }}
        onScrollEndDrag={({ nativeEvent }) =>
          (currentOffset.current = nativeEvent.contentOffset.y)
        }
      >
        {images.map((image) => (
          <ListItem key={image.text} image={image} />
        ))}
      </ScrollView>
    </View>
  );
}
