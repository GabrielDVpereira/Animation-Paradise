import React from "react";
import { ScrollView } from "react-native";
import generateFakeData from "../../utils/factory/infoFactory";
import Card from "./card";

const data = generateFakeData(10);

export default function ListApperance() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      {data.map((item, i) => (
        <Card key={i} item={item} index={i} />
      ))}
    </ScrollView>
  );
}
