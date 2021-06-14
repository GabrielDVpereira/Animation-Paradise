import React, { useState } from 'react'
import { View, Text, Platform, UIManager, LayoutAnimation, StyleSheet, TouchableOpacity } from 'react-native'

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

export default function ModalFromButton() {
    const [modalVisible, setModalVisible] = useState(false); 

    const renderModal = () => {
        return(
            <View style={modalVisible ? styles.modalVisible : styles.modalNotVisible}>
                <TouchableOpacity style={modalVisible ? styles.modalContentVisible : styles.modalContentNotVisible} onPress={toggleModal}/>
            </View>
        )
    }

    const toggleModal = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setModalVisible((prev) => !prev); 
    }
    return (
        <View style={{width: '100%', flex: 1}}>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Modal from button</Text>
            </TouchableOpacity>
            {renderModal()}
        </View>
    )
}

const styles = StyleSheet.create({
    modalNotVisible: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: -1, 
    }, 
    modalVisible: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'
    }, 
    modalContentVisible: {
        top: 100,
        backgroundColor: '#fff',
        width: 300, 
        height: 300,
        borderRadius: 10
    },
    modalContentNotVisible: {
        width: 0, 
        height: 0,
    }
})