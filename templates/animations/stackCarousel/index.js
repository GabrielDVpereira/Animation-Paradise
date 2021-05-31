import * as React from "react";
import {
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

import { DATA } from "./data";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const { width, height } = Dimensions.get("screen");

const OVERFLOW_HEIGHT = 80;
const SPACING = 10;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3

const OverflowItems = ({ data, scrollXAnimation }) => {
  const inputRange = [-1, 0,1]
  const translateY = scrollXAnimation.interpolate({
    inputRange, 
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT]
  })

  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>
                  <EvilIcons
                    name="location"
                    size={16}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  {item.location}
                </Text>
                <Text style={[styles.date]}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function StackCarousel() {
  const [data, setData] = useState(DATA)
  const scrollXIndex = useRef(new Animated.Value(0)).current
  const scrollXAnimation = useRef(new Animated.Value(0)).current 
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex, 
      useNativeDriver: true
    }).start()
  }, [])

  const setActiveIndex = useCallback(activeIndex => {
    setIndex(activeIndex)
    scrollXIndex.setValue(activeIndex)
  })

  return (
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if(ev.nativeEvent.state === State.END){
          if(index == data.length -1 ){
            return
          }
          setActiveIndex(index + 1)

        }
      }}
    >
      <FlingGestureHandler
         key='right'
         direction={Directions.RIGHT}
         onHandlerStateChange={ev => {
           if(ev.nativeEvent.state === State.END){
             if(index == 0 ){
               return
             }
             setActiveIndex(index - 1)
   
           }
         }}
      >
        <SafeAreaView style={styles.container}>
          <OverflowItems data={DATA} scrollXAnimation={scrollXAnimation}/>
          <FlatList 
            data={data}
            horizontal
            inverted
            scrollEnabled={false}
            removeClippedSubviews={false}
            contentContainerStyle={{flex: 1, justifyContent: 'center', padding: SPACING*2}}
            keyExtrator={(_, index) => String(index)}
            CellRendererComponent={({item, index, children, style, ...props}) => {
              const newStyle = [
                style, 
                {zIndex: data.length - index}
              ]
              return(
                <View style={newStyle} key={index} {...props}>
                  {children}
                </View>
              )
            }}
            renderItem={({item, index}) => {
              const inputRange = [index -1, index, index + 1]
              const translateX = scrollXAnimation.interpolate({
                inputRange,
                outputRange: [50, 0, -100]
              })
              
              const scale = scrollXAnimation.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3]
              })
              
              const opacity = scrollXAnimation.interpolate({
                inputRange,
                outputRange: [1-1/VISIBLE_ITEMS, 1, 0]
              })
              
              return(
                <Animated.View key={index} style={{ position: 'absolute',left: -ITEM_WIDTH / 2, opacity ,transform:[{ translateX }, { scale }],  }}>
                  <Image  source={{uri: item.poster}} style={{
                    width: ITEM_WIDTH, 
                    height: ITEM_HEIGHT
                  }}/>
                </Animated.View>
              )
            }}
            />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: "hidden",
  },
});
