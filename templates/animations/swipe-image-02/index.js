import React from "react";
import { ScrollView, View, Image, Dimensions } from "react-native";
import images from "../../../assets/images";
import Animated, { add } from "react-native-reanimated";

const { width: screen_width, height: screen_height } = Dimensions.get("window");
const imagePadding = 50;
const imageWidth = screen_width - imagePadding * 2;

export default function SwipeImage2() {
  const offsetx = new Animated.Value(0);
  return (
    <Animated.ScrollView
      horizontal
      scrollEventThrottle={1}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: offsetx,
            },
          },
        },
      ])}
      snapToAlignment="right"
      decelerationRate="fast"
      snapToInterval={imageWidth}
      style={{ paddingVertical: 50 }}
      contentContainerStyle={{ paddingHorizontal: imagePadding }}
    >
      {images.map((image, index) => (
        <Animated.Image
          source={image.uri}
          style={{
            width: imageWidth,
            height: 400,
            backgroundColor: "#000",
            borderEndWidth: 1,
            borderRadius: 20,
            transform: [
              {
                scale: Animated.interpolate(offsetx, {
                  inputRange: [
                    Animated.multiply(Animated.sub(index, 1), imageWidth),
                    Animated.multiply(index, imageWidth),
                    Animated.multiply(Animated.add(index, 1), imageWidth),
                  ],
                  outputRange: [0.9, 1, 0.9],
                }),
              },
            ],
            opacity: Animated.interpolate(offsetx, {
              inputRange: [
                Animated.multiply(Animated.sub(index, 1), imageWidth),
                Animated.multiply(index, imageWidth),
                Animated.multiply(Animated.add(index, 1), imageWidth),
              ],
              outputRange: [0.5, 1, 0.5],
            }),
          }}
        />
      ))}
    </Animated.ScrollView>
  );
}
