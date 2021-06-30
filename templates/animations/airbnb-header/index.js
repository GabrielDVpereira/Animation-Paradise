import React, { useRef } from "react";
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
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerAnimation = useRef(Animated.diffClamp(scrollY, 0, headerHeight)).current;

  // const scrollEvent = Animated.event([
  //   {
  //     nativeEvent: {
  //       contentOffset: {
  //         y: scrollY,
  //       },
  //     },
  //   },
  // ], { useNativeDriver: true });
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
      <Animated.ScrollView
        bounces={false}
        contentContainerStyle={styles.imageContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            }
          }
        ], { useNativeDriver: true })}
      >
        {images.map((image) => (
          <Image key={image.id} source={image.url} style={styles.image} />
        ))}
      </Animated.ScrollView>
    </>
  );
}
