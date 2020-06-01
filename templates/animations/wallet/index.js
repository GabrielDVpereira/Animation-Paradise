import React, { useState, useCallback } from "react";
import { Animated, FlatList } from "react-native";
import cardColors from "./cardColors";
import Card from "./Card";

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
let y = new Animated.Value(0);
let velocityY = new Animated.Value(0);

export default function AnimatedCards() {
  const [viewableItemsIndex, setViewItems] = useState([]);
  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y,
          },
          velocity: {
            y: velocityY,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const viewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    const viewableItemsIndex = viewableItems.map((item) => item.index);
    setViewItems(viewableItemsIndex);
  }, []);

  return (
    <AnimatedFlatlist
      data={cardColors}
      keyExtractor={(color) => color}
      renderItem={({ item: bgColor, index }) => (
        <Card
          index={index}
          bgColor={bgColor}
          y={y}
          visible={viewableItemsIndex.includes(index)}
          velocityY={velocityY}
        />
      )}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }}
      // onScroll={({ nativeEvent }) => console.log(nativeEvent)}
      onScroll={onScroll}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
    />
  );
}
