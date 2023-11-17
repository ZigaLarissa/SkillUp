import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

function Habit(props) {
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name="checkmark-circle-outline" />
            <View style={styles.content}>
                <Text style={styles.bgtext}>I will open Visual Studio Code</Text>
                <Text style={styles.smtext} >After, I open my laptop.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#59D5A0',
        width: '95%',
        height: 80,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 5,
    },

    icon: {
        color: '#1D3035',
        fontSize: 50,
    },

    content: {
        width: '80%',
    },

    bgtext: {
        color: '#1D3035',
        fontWeight: 'bold',
        fontSize: 20,
    },

    smtext: {
        color: '#545454',
        fontSize: 18,
    },
})

export default Habit;