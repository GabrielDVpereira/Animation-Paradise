import React, { useState } from 'react'
import { View, Text, Platform, UIManager, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

export default function ModalFromButton() {
    const [modalVisible, setModalVisible] = useState(false); 


    const toggleModal = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setModalVisible((prev) => !prev); 
    }
    return (
        <View style={{width: '100%', flex: 1}}>
            <TouchableOpacity onPress={toggleModal} style={modalVisible? styles.buttonActive: styles.buttonNotActive}>
               {modalVisible ? <Text style={{color: "#fff", fontSize: 30}}>Modal content</Text> :  <Text style={{color: "#fff"}}>Modal from button</Text>}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonNotActive:{ 
        padding: 10, 
        backgroundColor: 
        '#6e6eeb', 
        width: 150, 
        marginTop: 40, 
        borderRadius: 5,
        alignSelf: 'center'
    }, 
    buttonActive: {
        borderRadius: 10,
        backgroundColor: "#41c8e5", 
        width: 250,
        height: 200, 
        alignSelf: 'center', 
        marginTop: 100, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
    
})