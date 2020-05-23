import React, { useState } from "react";
import { View, ScrollView, Dimensions, Animated } from "react-native";
import images from "../../../assets/images";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const imageScale = new Animated.Value(1);
const progressBar = new Animated.Value(0);

export default function Swipe() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageOffset, setCurrentImageOffset] = useState(0);

  function onZoomEvent({ nativeEvent }) {
    if (nativeEvent.scale > 1) {
      imageScale.setValue(nativeEvent.scale);
    }
  }

  function onZoomStop({ nativeEvent }) {
    if (nativeEvent.state === State.END) {
      Animated.spring(imageScale, {
        toValue: 1,
      }).start();
    }
  }

  function incrementCurrentImageIndex({ nativeEvent }) {
    const { x: amoutWidthSwiped } = nativeEvent.contentOffset;
    progressBar.setValue(amoutWidthSwiped);

    if (
      (amoutWidthSwiped - currentImageOffset).toFixed(1) ==
      SCREEN_WIDTH.toFixed(1)
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
      setCurrentImageOffset(amoutWidthSwiped);
    } else if (
      (amoutWidthSwiped - currentImageOffset).toFixed(1) ==
      -SCREEN_WIDTH.toFixed(1)
    ) {
      setCurrentImageIndex(currentImageIndex - 1);
      setCurrentImageOffset(amoutWidthSwiped);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={incrementCurrentImageIndex}
      >
        {images.map((image, imageIndex) => (
          <View
            key={image.id}
            style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          >
            <PinchGestureHandler
              onGestureEvent={onZoomEvent}
              onHandlerStateChange={onZoomStop}
            >
              <Animated.Image
                source={image.uri}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                  height: "100%",
                  transform:
                    imageIndex == currentImageIndex
                      ? [{ scale: imageScale }]
                      : [],
                }}
              />
            </PinchGestureHandler>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          width: SCREEN_WIDTH * 0.8,
          height: 5,
          backgroundColor: "rgba(0,0,0,0.8)",
          position: "absolute",
          bottom: 10,
          elevation: 5,
          borderRadius: 20,
          alignSelf: "center",
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            marginLeft: progressBar.interpolate({
              inputRange: [0, SCREEN_WIDTH * images.length],
              outputRange: [0, SCREEN_WIDTH * 0.8],
            }),
            width: (SCREEN_WIDTH * 0.8) / images.length,
            height: 5,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
}
