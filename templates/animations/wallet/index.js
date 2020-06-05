import React, { useState, useCallback } from "react";
import { Animated, FlatList } from "react-native";
import cardColors from "./cardColors";
import Card from "./Card";

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
let y = new Animated.Value(0);
let velocityY = new Animated.Value(0);

export default function AnimatedCards() {
  const [viewableItems, setviewableItems] = useState([]);
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

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    const viewableItemsEvent = viewableItems.map((item) => item.index);
    setviewableItems(viewableItemsEvent);
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
          velocityY={velocityY}
          visible={viewableItems.includes(index)}
        />
      )}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }}
      // onScroll={({ nativeEvent }) => console.log(nativeEvent)}
      onScroll={onScroll}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
