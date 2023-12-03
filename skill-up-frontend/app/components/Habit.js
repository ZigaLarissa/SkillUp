import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Delete from './Delete';
import Update from './Update';

function Habit(props) {
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name="checkmark-circle-outline" />
            <View style={styles.content}>
                <Text style={styles.bgtext}>Study UI/UX</Text>
                <Text style={styles.smtext} >Learn UI/UX design on Figma.</Text>
            </View>
            <Update />
            <Delete />
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
        paddingHorizontal: 10,
    },

    icon: {
        color: '#1D3035',
        fontSize: 50,
        paddingHorizontal: 10,
    },

    content: {
        width: '60%',
    },

    bgtext: {
        color: '#1D3035',
        fontWeight: 'bold',
        fontSize: 18,
    },

    smtext: {
        color: '#545454',
        fontSize: 14,
    },
})

export default Habit;