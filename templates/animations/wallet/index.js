import React, { useState, useCallback } from "react";
import { Animated, FlatList } from "react-native";
import cardColors from "./cardColors";
import Card from "./Card";

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
let y = new Animated.Value(0);

export default function AnimatedCards() {
  const [viewbleItems, setViewItems] = useState([]);
  const [viewbleItemsChanged, setViewbleItemsChanged] = useState([]);

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const viewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    setViewItems(viewableItems);
    setViewbleItemsChanged(changed);
  }, []);

  return (
    <AnimatedFlatlist
      data={cardColors}
      keyExtractor={(color) => color}
      renderItem={({ item: bgColor, index }) => (
        <Card index={index} bgColor={bgColor} y={y} />
      )}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }}
      onScroll={onScroll}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 30 }}
    />
  );
}
