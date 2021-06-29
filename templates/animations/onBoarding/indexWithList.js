import React, { useRef, useState, useCallback } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, SafeAreaView, Animated, FlatList } from 'react-native';

const { height: HEIGHT } = Dimensions.get('screen')
const PAGES = ['red', 'blue', 'yellow'];
const DOT_SIZE = 10;
const CONTENT_HEIGHT = HEIGHT * 0.7;

export default function OnBoarding() {
    const offset = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);
    const listRef = useRef();

    const transitionContent = () => {
        if ((currentIndex + 1) < PAGES.length) {
            listRef.current.scrollToOffset({ animated: true, offset: CONTENT_HEIGHT * (currentIndex + 1) })
        }
    }

    const handleViawbleChange = useCallback(({ changed }) => {
        setCurrentIndex(changed.filter(item => item.isViewable)[0]?.index)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.paginationContainer}>
                {
                    PAGES.map((item, index) => (
                        <View key={item} style={index === currentIndex ? styles.paginationDotSelected : styles.paginationDot} />
                    ))
                }
            </View>
            <Animated.FlatList
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: offset
                            }
                        }
                    }
                ], { useNativeDriver: true })}
                ref={listRef}
                onViewableItemsChanged={handleViawbleChange}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
                style={styles.content}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                data={PAGES}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [CONTENT_HEIGHT * (index - 0.3), CONTENT_HEIGHT * index, CONTENT_HEIGHT * (index + 0.3)];
                    const opacity = offset.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    const inputRangeScale = [CONTENT_HEIGHT * (index - 1), CONTENT_HEIGHT * index, CONTENT_HEIGHT * (index + 1)];
                    const scale = offset.interpolate({
                        inputRange: inputRangeScale,
                        outputRange: [0, 1, 0]
                    })
                    return (
                        <Animated.View key={index} style={[styles.item, { opacity, transform: [{ scale }] }]}>
                            <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Animated.View>
                    )
                }}
            />

            <TouchableOpacity style={styles.transitionButton} onPress={transitionContent}>
                <Text>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    paginationContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    paginationDot: {
        height: DOT_SIZE,
        width: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        borderColor: '#000',
        borderWidth: 1,
        margin: 10
    },
    paginationDotSelected: {
        height: DOT_SIZE,
        width: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        backgroundColor: '#000',
        borderWidth: 1,
        margin: 10
    },
    content: {
        height: CONTENT_HEIGHT,
    },
    item: {
        height: CONTENT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    transitionButton: {
        alignSelf: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }

})