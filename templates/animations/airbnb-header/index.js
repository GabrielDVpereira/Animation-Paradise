import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import images from "./images";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const headerHeight = 90;

export default function Header({ navigation }) {
  const scrollY = new Animated.Value(0);
  const headerAnimation = Animated.diffClamp(scrollY, 0, headerHeight);

  const scrollEvent = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y: scrollY,
        },
      },
    },
  ]);
  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: headerAnimation.interpolate({
                  inputRange: [0, 90],
                  outputRange: [0, -90],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity style={styles.backIcon}>
          <Feather
            name="arrow-left"
            size={24}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hidable Header</Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.imageContainer}
        showsVerticalScrollIndicator={false}
        onScroll={scrollEvent}
      >
        {images.map((image) => (
          <Image key={image.id} source={image.url} style={styles.image} />
        ))}
      </ScrollView>
    </>
  );
}
