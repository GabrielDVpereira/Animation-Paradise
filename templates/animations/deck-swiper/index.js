import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  Panresponder,
} from "react-native";
import images from "./images";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

function renderImages() {
  return images.map((image) => (
    <Animated.View
      key={image.id}
      style={[
        {
          height: SCREEN_HEIGHT - 120,
          width: SCREEN_WIDTH,
          padding: 15,
          position: "absolute",
        },
      ]}
    >
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 20,
        }}
        source={image.uri}
      />
    </Animated.View>
  ));
}
export default function Swipper() {
  return <View style={{ flex: 1, marginTop: 20 }}>{renderImages()}</View>;
}
