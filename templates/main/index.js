import React, { useRef } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import { Feather } from "@expo/vector-icons";

import components from "../Routes/components";
import styles from "./styles";

const TOTAL_COLUMNS = 2
const TOTAL_ROWS = components.length / TOTAL_COLUMNS 

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);


const CARD_HEIGHT = 100; 
const CARD_WIDTH  = 150;
const CARD_MARGIN = 20; 

const CARD_SPACE = CARD_HEIGHT + CARD_MARGIN 

export default function Main({ navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  scrollY.addListener(({value})  => console.log(value))

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require("../../assets/images/paradise.jpg")}
    >
      <View style={styles.animationList}>
        <Animated.FlatList
          onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true}
          )}
          numColumns={TOTAL_COLUMNS}
          data={components}
          keyExtractor={(item) => {
            return item.name;
          }}
          renderItem={({ item: componet, index }) => {
            const componentRow = Math.ceil((index + 1 ) /TOTAL_COLUMNS) - 1

            const inputRange = [-1, 0, CARD_SPACE*componentRow, CARD_SPACE*(componentRow + 2)]
            const inputRangeOpacity = [-1, 0, CARD_SPACE*componentRow, CARD_SPACE*(componentRow + 1)]

            const scale = scrollY.interpolate({
              inputRange, 
              outputRange: [1,1,1,0]
            })
            const opacity = scrollY.interpolate({
              inputRange: inputRangeOpacity, 
              outputRange: [1,1,1,0]
            });
            return(
              <AnimatedTouchable
                  key={componet.name}
                  style={[styles.animation, { width: CARD_WIDTH, height: CARD_HEIGHT, marginBottom: CARD_MARGIN, transform:[{scale}], opacity}]}
                  onPress={() => navigation.navigate(componet.name)}
                >
                  <Text style={styles.animationTitle}>{componet.name}</Text>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Go to animation</Text>
                    <Feather name="arrow-right" color="#696969" size={16} />
                  </View>
                </AnimatedTouchable>
            )
          }}
        />
      </View>
    </ImageBackground>
  );
}
