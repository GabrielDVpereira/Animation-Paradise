
import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export default function ParallaxCarousel() {
  const scrollx = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: true }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        keyExtractor={(item => item.key)}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]

          const translateX = scrollx.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7]
          })
          return (
            <View style={{ width, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: '#000',
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  shadowOffset: {
                    width: 0,
                    height: 0
                  },
                  borderRadius: 18,
                  backgroundColor: 'white',
                  elevation: 10
                }}
              >
                <View style={{
                  width: ITEM_WIDTH,
                  height: ITEM_HEIGHT,
                  overflow: 'hidden',
                  alignItems: 'center',
                  borderRadius: 18,
                  borderWidth: 10,
                  borderColor: 'white',
                  zIndex: 10
                }}>
                  <Animated.Image source={{ uri: item.photo }}
                    style={{
                      width: ITEM_WIDTH * 1.4,
                      height: ITEM_HEIGHT,
                      resizeMode: 'cover',
                      transform: [{ translateX }]
                    }}
                  />
                </View>
                <Image source={{ uri: item.avatar_url }} style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  borderWidth: 6,
                  borderColor: 'white',
                  position: 'absolute',
                  bottom: -30,
                  right: 60,
                  zIndex: 11
                }} />
              </View>

            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});