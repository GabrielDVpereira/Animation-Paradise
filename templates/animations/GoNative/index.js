import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import list from "./list";
import Card from "./card";
import styles from "./styles";

const scrollOffset = new Animated.Value(0);
const aimateHeader = new Animated.diffClamp(scrollOffset, 0, 200);

export default function GoNative() {
  const offset = new Animated.ValueXY({ x: 0, y: 50 });
  const opacity = new Animated.Value(0);

  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  }, [selectedCard]);
  return (
    <>
      {selectedCard ? (
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateY: aimateHeader.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, -130],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
            styles.headerImageContainer,
          ]}
        >
          <ImageBackground
            resizeMode="cover"
            source={selectedCard.image}
            style={styles.headerImage}
          >
            <Animated.Text
              style={[
                {
                  fontSize: aimateHeader.interpolate({
                    inputRange: [0, 150],
                    outputRange: [26, 20],
                    extrapolate: "clamp",
                  }),
                },
                styles.headerTitle,
              ]}
            >
              {selectedCard.name}
            </Animated.Text>
          </ImageBackground>
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateY: aimateHeader.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, -130],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
            styles.headerNoImage,
          ]}
        >
          <Animated.Text
            style={[
              {
                fontSize: aimateHeader.interpolate({
                  inputRange: [0, 150],
                  outputRange: [26, 20],
                  extrapolate: "clamp",
                }),
              },
              styles.headerTitle,
            ]}
          >
            GoNative
          </Animated.Text>
        </Animated.View>
      )}
      <Animated.View
        style={{ transform: [...offset.getTranslateTransform()], opacity }}
      >
        {selectedCard ? (
          <Animated.View
            style={{
              marginTop: aimateHeader.interpolate({
                inputRange: [0, 150],
                outputRange: [200, 100],
              }),
            }}
          >
            <Card card={selectedCard} />
          </Animated.View>
        ) : (
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: { y: scrollOffset },
                },
              },
            ])}
            contentContainerStyle={{ marginTop: 220, zIndex: 1 }}
          >
            {list.map((card) => (
              <TouchableOpacity
                key={card.name}
                onPress={() => setSelectedCard(card)}
                activeOpacity={1}
              >
                <Card card={card} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </>
  );
}
