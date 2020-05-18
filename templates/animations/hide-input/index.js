import React, { useRef } from "react";
import infoFactory from "../../utils/factory/infoFactory";
import ListItem from "./ListItem";

import {
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

const scroll = new Animated.Value(0);
const y = new Animated.diffClamp(scroll, 0, 80);

export default function List() {
  const fakeInformation = useRef(infoFactory(10)).current;

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
      <Animated.View style={styles.listContainer}>
        <Animated.ScrollView
          contentContainerStyle={{
            zIndex: 1,
            paddingTop: 70,
          }}
          canCancelContentTouches={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          onScroll={({ nativeEvent }) => {
            scroll.setValue(nativeEvent.contentOffset.y);
          }}
          overScrollMode="never"
        >
          {fakeInformation.map((info) => (
            <ListItem key={info.name} info={info} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
    </>
  );
}
