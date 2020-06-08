import React from "react";
import { View } from "react-native";
import DragItem from "./DragItem";
export default function BlurBackground() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DragItem />
    </View>
  );
}
