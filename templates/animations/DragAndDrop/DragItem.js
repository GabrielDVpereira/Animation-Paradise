import React, { useState } from "react";
import { Text, View, Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const translate = new Animated.ValueXY();
const scale = new Animated.Value(1);
export default function ModalBlur() {
  const [offset, setOffset] = useState({
    y: 0,
    x: 0,
  });
  const [isDragging, setDragging] = useState(false);
  function animatedDrop() {
    Animated.spring(scale, {
      toValue: 1,
      tension: 80,
      useNativeDriver: true,
    }).start();
  }
  function animatedDrag() {
    Animated.timing(scale, {
      toValue: 1.5,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }

  return (
    <PanGestureHandler
      onGestureEvent={({ nativeEvent }) => {
        translate.setValue({
          y: nativeEvent.translationY + offset.y,
          x: nativeEvent.translationX + offset.x,
        });
      }}
      onHandlerStateChange={({ nativeEvent }) => {
        console.log(nativeEvent);
        if (
          nativeEvent.state == State.ACTIVE ||
          nativeEvent.state == State.BEGAN
        ) {
          setDragging(true);
          animatedDrag();
        } else {
          setDragging(false);
          animatedDrop();
          setOffset({
            y: offset.y + nativeEvent.translationY,
            x: offset.x + nativeEvent.translationX,
          });
        }
      }}
    >
      <Animated.View
        style={{
          transform: [...translate.getTranslateTransform(), { scale }],
          backgroundColor: isDragging ? "#ef7564" : "#f5d3ce",
          width: 100,
          height: 100,
          padding: 10,
          borderRadius: 60,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: isDragging ? "#fff" : "#000",
            fontSize: 16,
            fontFamily: "montserrat-medium",
          }}
        >
          {isDragging ? "Drop me!" : "Drag me"}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  );
}
