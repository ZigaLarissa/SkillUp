import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

function ColorLabels(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.color1} onPress={() => console.log('color 1 pressed')}/>
            <View style={styles.color2} />
            <View style={styles.color3} />
            <View style={styles.color4} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginLeft: 10,
    },

    color1: {
        width: 30,
        height: 30,
        backgroundColor: '#FF0000',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#000',
        
    },

    color2: {
        width: 30,
        height: 30,
        backgroundColor: '#00FF00',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#000',
    },

    color3: {
        width: 30,
        height: 30,
        backgroundColor: '#0000FF',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#000',
    },

    color4: {
        width: 30,
        height: 30,
        backgroundColor: '#FFFF00',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#000',
    },
})

export default ColorLabels;