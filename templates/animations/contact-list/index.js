import React from 'react'; 
import { DATA } from './data'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
import { useRef } from 'react';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

const BG_IMG = 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=true'
export default function ContactList(){
    const scrollY = useRef(new Animated.Value(0)).current;

    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Image 
                source={{uri: BG_IMG}}
                style={ StyleSheet.absoluteFillObject }
                blurRadius={80}
            />
            <Animated.FlatList 
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
                data={DATA}
                keyExtractor={item => item.key}
                contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
                renderItem={({item, index}) => {
                    const inputRange = [
                        -1, 0 , ITEM_SIZE * index, ITEM_SIZE * (index + 2)
                    ]

                    const opacityInputRange = [
                        -1, 0 , ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)
                    ]


                    const scale = scrollY.interpolate({
                        inputRange, 
                        outputRange:[1,1,1,0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange, 
                        outputRange:[1,1,1,0]
                    })
                    return (
                        <Animated.View 
                            style={{
                                opacity,
                                transform: [{scale}],
                                flexDirection: 'row', 
                                padding: SPACING,
                                marginBottom: SPACING, 
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                borderRadius: 16, 
                                shadowColor: '#000', 
                                shadowOffset: {
                                    width: 0, 
                                    height: 10
                                },
                                shadowOpacity: 0.3, 
                                shadowRadius: 20
                            
                            }}
                        >
                            <Image 
                                source={{uri: item.image}}
                                style={{
                                    width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2
                                }}
                            />
                            <View>
                                <Text style={{fontSize: 22, fontWeight: '700'}}>{item.name}</Text>
                                <Text style={{fontSize: 18, opacity: 0.7}}>{item.jobTitle}</Text>
                                <Text style={{fontSize: 14, opacity: 0.8, color: '#0099cc'}}>{item.email}</Text>
                            </View>
                        </Animated.View>
                    )
                }}
            />
        </View>
    )

}