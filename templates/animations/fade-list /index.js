import React, { useState, useRef } from "react";
import imageFactory from "../../utils/factory/imageFactory";
import ListItem from "./ListItem";

import {
  View,
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
        style={{
          flexDirection: "row",
          position: "absolute",
          width: "100%",
          height: 70,
          zIndex: -1,
          paddingTop: 10,
          backgroundColor: "#fff",
          transform: [
            {
              translateY: y.interpolate({
                inputRange: [0, 80],
                outputRange: [0, -80],
              }),
            },
          ],
        }}
      >
        <TextInput
          placeholder="serch for a dev"
          style={{
            marginLeft: 15,
            elevation: 2,
            backgroundColor: "#f5f5f5",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            flex: 5,
            paddingHorizontal: 10,
            fontSize: 20,
            height: 50,
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
            height: 50,
            marginRight: 15,
          }}
        >
          <Feather name="search" color="#fff" size={22} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
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
