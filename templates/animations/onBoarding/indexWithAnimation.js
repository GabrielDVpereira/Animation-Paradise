import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, SafeAreaView, Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const { height: HEIGHT } = Dimensions.get('screen')
const PAGES = ['red', 'blue', 'yellow'];
const DOT_SIZE = 10;
const CONTENT_HEIGHT = HEIGHT * 0.7;

export default function OnBoarding() {
    const translateY = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0);

    const transitionContent = () => {
        if ((currentIndex + 1) < PAGES.length) {
            setCurrentIndex(prev => prev + 1)
            Animated.timing(translateY, {
                duration: 1000,
                easing: Easing.elastic(0.8),
                toValue: -CONTENT_HEIGHT * (currentIndex + 1),
                useNativeDriver: true
            }).start()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.paginationContainer}>
                {
                    PAGES.map((item, index) => (
                        <View key={item} style={index === currentIndex ? styles.paginationDotSelected : styles.paginationDot} />
                    ))
                }
            </View>

            <View style={styles.content}>
                {PAGES.map((color, index) => {
                    const inputRange = [-CONTENT_HEIGHT * (index + 0.2), -CONTENT_HEIGHT * index, -CONTENT_HEIGHT * (index - 0.2)];
                    const opacity = translateY.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return (
                        <Animated.View key={index} style={[styles.item, { transform: [{ translateY }], opacity }]}>
                            <Text style={styles.title}>Lorem ipsum dolor sit amet</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Animated.View>)
                })}
            </View>

            <TouchableOpacity style={styles.transitionButton} onPress={transitionContent}>
                <Text>Transition content</Text>
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
        overflow: 'hidden'
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