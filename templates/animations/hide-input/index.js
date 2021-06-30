import React, { useRef } from "react";
import { View } from 'react-native'
import infoFactory from "../../utils/factory/infoFactory";
import ListItem from "./ListItem";

import { TouchableOpacity, Animated, TextInput } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";



export default function List() {
  const fakeInformation = useRef(infoFactory(10)).current;
  const scroll = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.diffClamp(scroll, 0, 80)).current;

  return (
    <>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            transform: [
              {
                translateY: y.interpolate({
                  inputRange: [0, 80],
                  outputRange: [0, -80],
                }),
              },
            ],
          },
        ]}
      >
        <TextInput
          placeholder="serch for a dev"
          placeholderTextColor="#dbdbdb"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" color="#dbdbdb" size={22} />
        </TouchableOpacity>
      </Animated.View>
      <View style={styles.listContainer}>
        <Animated.ScrollView
          contentContainerStyle={{
            zIndex: 1,
            paddingTop: 70,
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                y: scroll
              }
            }
          }], { useNativeDriver: true })}
          overScrollMode="never"
        >
          {fakeInformation.map((info) => (
            <ListItem key={info.name} info={info} />
          ))}
        </Animated.ScrollView>
      </View>
    </>
  );
}
