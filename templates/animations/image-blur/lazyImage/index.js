import React, { useState, useEffect } from "react";
import { Image, ImageBackground, Animated } from "react-native";

const opacity = new Animated.Value(0);

export default function LazyImage({ url, url_small, aspectRatio, shouldLoad }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) setLoaded(true);
  }, [shouldLoad]);

  function animateOpacity() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }
  return (
    <ImageBackground
      source={{ uri: url_small }}
      style={{
        width: "100%",
        aspectRatio,
        marginBottom: 10,
      }}
      blurRadius={1}
      resizeMode="contain"
    >
      {loaded && (
        <Animated.Image
          source={{ uri: url }}
          style={{
            width: "100%",
            aspectRatio,
            marginBottom: 10,
            opacity,
          }}
          onLoadEnd={animateOpacity}
          resizeMode="contain"
        />
      )}
    </ImageBackground>
  );
}
