import React from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";
import images from "../../../assets/images";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Swipe() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        decelerationRate="fast"
        snapToInterval={SCREEN_WIDTH}
        bounces={false}
      >
        {images.map((image) => (
          <View
            key={image.id}
            style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          >
            <Image
              source={image.uri}
              style={{ resizeMode: "cover", width: "100%", height: "100%" }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
