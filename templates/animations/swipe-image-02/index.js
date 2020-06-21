import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import images from "../../../assets/images";
import Animated from "react-native-reanimated";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

const { width: screen_width, height: screen_height } = Dimensions.get("window");
const imagePadding = 50;
const imageWidth = screen_width - imagePadding * 2;

const { add, multiply, sub, interpolate, useCode, call } = Animated;

export default function SwipeImage2() {
  const offsetx = useRef(new Animated.Value(0)).current;
  const imageScaleOnPinch = useRef(new Animated.Value(1)).current;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pinchActive, setPinchActive] = useState(false);

  useCode(() => {
    return call([offsetx], (offsetx) => {
      setCurrentImageIndex(Math.ceil(offsetx[0] / imageWidth));
    });
  }, [offsetx]);

  function getImageTransformation(index) {
    if (pinchActive && currentImageIndex == index) {
      return {
        scale: interpolate(imageScaleOnPinch, {
          inputRange: [0, 1, 2],
          outputRange: [1, 1, 1.5],
        }),
      };
    }
    //call a fuction to make a spring animation to the imageScaleOnPinch before its returned
    return {
      scale: interpolate(offsetx, {
        inputRange: [
          multiply(sub(index, 1), imageWidth),
          multiply(index, imageWidth),
          multiply(add(index, 1), imageWidth),
        ],
        outputRange: [0.9, 1, 0.9],
      }),
    };
  }

  function getImageOpacity(index) {
    if (pinchActive && currentImageIndex !== index) return 0; //Apply an timing to bring opacity to 0

    return interpolate(offsetx, {
      inputRange: [
        multiply(sub(index, 1), imageWidth),
        multiply(index, imageWidth),
        multiply(add(index, 1), imageWidth),
      ],
      outputRange: [0.5, 1, 0.5],
    });
  }

  function handleStateChanged({ nativeEvent }) {
    if (nativeEvent.state == State.ACTIVE) {
      setPinchActive(true);
    } else {
      setPinchActive(false);
    }
  }

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
      contentContainerStyle={{
        paddingHorizontal: imagePadding,
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <PinchGestureHandler
          onGestureEvent={Animated.event([
            { nativeEvent: { scale: imageScaleOnPinch } },
          ])}
          onHandlerStateChange={handleStateChanged}
        >
          <Animated.Image
            source={image.uri}
            style={{
              width: imageWidth,
              height: 400,
              backgroundColor: "#fff",
              borderEndWidth: 1,
              borderRadius: 20,
              transform: [getImageTransformation(index)],
              opacity: getImageOpacity(index),
            }}
          />
        </PinchGestureHandler>
      ))}
    </Animated.ScrollView>
  );
}
