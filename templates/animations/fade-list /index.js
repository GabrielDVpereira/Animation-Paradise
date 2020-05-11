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
} from "react-native";
import styles from "./style";

const dy = new Animated.Value(100);

export default function List() {
  const images = useRef(imageFactory(10)).current;
  const currentOffset = useRef(0);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            height: dy.interpolate({
              inputRange: [0, 0, 100],
              outputRange: [0, 0, 50],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        Animation Paradise!
      </Animated.Text>
      <Animated.View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          onScroll={({ nativeEvent }) => {
            console.log(
              Math.abs(currentOffset.current - nativeEvent.contentOffset.y)
            );
            // dy.setValue(
            //   Math.abs(currentOffset.current - nativeEvent.contentOffset.y)
            // );

            // if (event.nativeEvent.velocity.y < 0) {
            //   textInputHeight.setValue(-event.nativeEvent.contentOffset.y);
            // } else {
            //   textInputHeight.setValue(-event.nativeEvent.contentOffset.y);
            // }
          }}
          onScrollEndDrag={({ nativeEvent }) =>
            (currentOffset.current = nativeEvent.contentOffset.y)
          }
        >
          {images.map((image) => (
            <ListItem key={image.text} image={image} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
