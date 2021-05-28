import React from 'react'; 
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native'; 
import Constants from 'expo-constants';
import { useRef, useState } from 'react';

const CIRCLE_SIZE = 100; 

const Circle = ({onPress, animatedValue}) => {
    const inputRange  = [0 , 0.5, 0.501 , 1]; // since we wanna make a suddenly change, we put a value near the 0.5 (half of the animation timing) to change the color
    const animatedContainerBg = animatedValue.interpolate({
        inputRange, 
        outputRange: ['gold', 'gold', '#444', '#444']
    })

    const animatedCircleBg = animatedValue.interpolate({
        inputRange, 
        outputRange: ['#444', '#444', 'gold', 'gold']
    })


    return (
        <Animated.View style={[StyleSheet.absoluteFillObject, styles.circleContainer, { backgroundColor: animatedContainerBg }]}>
            <Animated.View style={[
                styles.circle, 
                { 
                    backgroundColor: animatedCircleBg,
                    transform: [
                        {
                            perspective:  400, // with this, when the animation start, we feel like the animation is just comming at us
                        },
                        { 
                            rotateY: animatedValue.interpolate(
                                {
                                    inputRange: [0,0.5,1], 
                                    outputRange: ['0deg', '-90deg', '-180deg']
                                }) 
                        }, 
                        {
                            scale: animatedValue.interpolate({
                                inputRange: [0,0.5, 1], 
                                outputRange: [1, 8, 1 ]
                            })
                        },
                        {
                            translateX: animatedValue.interpolate({
                                inputRange: [0,0.5, 1], 
                                outputRange: ['0%', '50%', '0%' ]
                            })
                        }
                
                ] 
                }
            ]}>
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.circle, styles.circleButton]}>
                        <AntDesign name='arrowright' size={28} color={'white'} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

export default function Transition(){
    const animatedValue = useRef(new Animated.Value(0)).current
    const [index, setIndex] = useState(0)

    const animation = (toValue) => Animated.timing(animatedValue, {
        toValue,
        duration: 3000, 
        useNativeDriver: false
    })

    const onPress = () => { // on press, trigger the animation 
        setIndex(index === 1 ? 0 : 1)
        animation(index === 1 ? 0 : 1).start()
    }
    return(
        <View style={styles.container}>
            <Circle onPress={onPress} animatedValue={animatedValue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start'
    }, 
    circleContainer: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        padding:  8, 
        paddingBottom: 100, 
        backgroundColor: 'gold'
    }, 
    circle: {
        backgroundColor: '#444', 
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE, 
        borderRadius: CIRCLE_SIZE / 2
    }, 
    circleButton: {
        backgroundColor: 'transparent', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
  });