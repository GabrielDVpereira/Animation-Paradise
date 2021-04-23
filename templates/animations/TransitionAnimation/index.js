import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { DATA } from "./data";
import { SCREEN_WIDTH, styles, TICKER_HEIGHT, DOT_SIZE } from "./styles";
import { Pagination } from "./Pagination";
import { Ticker } from "./Ticker";
import { Circle } from "./Circle";
import { Item } from "./Item";

export default function HeadPhones() {
  const scrollx = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Circle scrollx={scrollx} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={DATA}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} scrollx={scrollx} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollx } },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <Image
        style={styles.logo}
        source={require("./images/ue_black_logo.png")}
      />
      <Pagination scrollx={scrollx} />
      <Ticker scrollx={scrollx} />
    </View>
  );
}
