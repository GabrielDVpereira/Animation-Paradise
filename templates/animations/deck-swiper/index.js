import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import images from "./images";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Swipper() {
  const cardPosition = new Animated.ValueXY();
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotateCard = cardPosition.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    cardPosition.setValue({ x: 0, y: 0 });
  }, [currentIndex]); //quando uma nova carta entra, a referencia de posição é zerada

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      cardPosition.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      console.log(gestureState.dx);
      if (gestureState.dx > 180) {
        Animated.timing(cardPosition, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          duration: 300,
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
        });
      } else if (gestureState.dx < -180) {
        Animated.timing(cardPosition, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          duration: 300,
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
        });
      } else {
        Animated.timing(cardPosition, {
          toValue: { x: 0, y: 0 },
          duration: 300,
        }).start();
      }
    },
  });

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      {
        images
          .map((image, index) => {
            if (currentIndex <= index) {
              // busca somente o primeiro card para dar o panResponder
              return (
                <Animated.View
                  {...(currentIndex == index ? panResponder.panHandlers : null)} // aplica o panResponder somente no primeiro
                  key={image.id}
                  style={[
                    {
                      transform:
                        currentIndex == index
                          ? [
                              { rotate: rotateCard },
                              ...cardPosition.getTranslateTransform(), // aplica a ação de movimentação ao arrastar somente ao primeiro
                            ]
                          : [
                              {
                                scale: cardPosition.x.interpolate({
                                  // adiciona 'novo item' escala a medida que o deslizamos o card
                                  inputRange: [
                                    -SCREEN_WIDTH / 2,
                                    0,
                                    SCREEN_WIDTH / 2,
                                  ],
                                  outputRange: [1, 0.8, 1],
                                  extrapolate: "clamp",
                                }),
                              },
                            ],
                    },
                    {
                      height: SCREEN_HEIGHT - 120,
                      width: SCREEN_WIDTH,
                      padding: 15,
                      position: "absolute",
                      opacity:
                        currentIndex == index
                          ? 1
                          : cardPosition.x.interpolate({
                              // adiciona 'novo item' opacidade a medida que o deslizamos o card
                              inputRange: [
                                -SCREEN_WIDTH / 2,
                                0,
                                SCREEN_WIDTH / 2,
                              ],
                              outputRange: [1, 0, 1],
                              extrapolate: "clamp",
                            }),
                    },
                  ]}
                >
                  <Animated.View
                    style={{
                      opacity:
                        currentIndex == index
                          ? cardPosition.x.interpolate({
                              inputRange: [
                                -SCREEN_WIDTH / 2,
                                0,
                                SCREEN_WIDTH / 2,
                              ],
                              outputRange: [0, 0, 1],
                              extrapolate: "clamp",
                            })
                          : 0,
                      position: "absolute",
                      top: 50,
                      right: 40,
                      zIndex: 10,
                      transform: [{ rotate: "30deg" }],
                    }}
                  >
                    <Text
                      style={{
                        color: "#427afa",
                        fontSize: 32,
                        fontFamily: "montserrat-bold",
                        padding: 10,
                      }}
                    >
                      Yess
                    </Text>
                  </Animated.View>

                  <Animated.View
                    style={{
                      opacity:
                        currentIndex == index
                          ? cardPosition.x.interpolate({
                              inputRange: [
                                -SCREEN_WIDTH / 2,
                                0,
                                SCREEN_WIDTH / 2,
                              ],
                              outputRange: [1, 0, 0],
                              extrapolate: "clamp",
                            })
                          : 0,
                      position: "absolute",
                      top: 50,
                      left: 40,
                      zIndex: 10,
                      transform: [{ rotate: "-30deg" }],
                    }}
                  >
                    <Text
                      style={{
                        color: "#427afa",
                        fontSize: 32,
                        fontFamily: "montserrat-bold",
                        padding: 10,
                      }}
                    >
                      NOOO
                    </Text>
                  </Animated.View>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 20,
                    }}
                    source={image.uri}
                  />
                </Animated.View>
              );
            }
          })
          .reverse() // reverse, pois o primeiro é o ultimo a ser vizualidado (começo da pilha)
      }
    </View>
  );
}
