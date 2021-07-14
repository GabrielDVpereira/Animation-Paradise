import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, Image, Animated } from 'react-native';
import { getMovies } from './api'
import Genres from './genres'
import Rating from './rating'

const { width, height } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);



export default function Carousel() {
  const [movies, setMovies] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies()
      setMovies([{ key: 'left-spacer' }, ...movies, { key: 'right-spacer' }]);
    }

    if (movies.length === 0) {
      fetchData()
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.key}
        horizontal
        snapToInterval={ITEM_SIZE}
        decelerationRate={0} // create the carrousel effect alongside with the snapToInterval effect
        bounces={false}
        scrollEventThrottle={16} // 16fps event
        contentContainerStyle={{
          alignItems: 'center'
        }}
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            (index) * ITEM_SIZE
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0]
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius: 34,
                  transform: [{ translateY }]
                }}
              >

                <Image
                  source={{ uri: item.poster }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 24 }}>{item.title}</Text>
                <Rating rating={item.rating} />
                <Genres genres={item.genres} />
                <Text style={{ fontSize: 12 }} numberOfLines={3}>{item.description}</Text>
              </Animated.View>
            </View>
          )
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});