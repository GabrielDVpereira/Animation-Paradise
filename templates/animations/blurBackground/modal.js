import React from "react";
import { Modal, Text, View, ImageBackground } from "react-native";

export default function ModalBlur() {
  return (
    <Modal visible={false} transparent>
      <ImageBackground
        source={require("../../../assets/images/paradise.png")}
        style={{ width: "100%", height: "100%" }}
        imageStyle={{ opacity: 0.5 }}
        blurRadius={3}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#ccc",
            alignSelf: "center",
          }}
        >
          <Text>This is my modal!!!!</Text>
        </View>
      </ImageBackground>
    </Modal>
  );
}
