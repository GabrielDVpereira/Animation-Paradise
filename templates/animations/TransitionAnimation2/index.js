import React from 'react'; 
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, View, TouchableOpacity } from 'react-native'; 
import Constants from 'expo-constants';

const CIRCLE_SIZE = 100; 

const Circle = ({onPress}) => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
            <View style={[styles.circle]}>
                <TouchableOpacity onPress={onPress}>
                    <View style={[styles.circle, styles.circleButton]}>
                        <AntDesign name='arrowright' size={28} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function Transition(){
    const onPress = () => {
        // fill me 
    }
    return(
        <View style={styles.container}>
            <Circle onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      paddingBottom: 50,
    },
    paragraph: {
      margin: 12,
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Menlo',
      color: 'white',
    },
    button: {
      height: 100,
      width: 100,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      backgroundColor: 'turquoise',
      width: 100,
      height: 100,
      borderRadius: 50,
    },
  });