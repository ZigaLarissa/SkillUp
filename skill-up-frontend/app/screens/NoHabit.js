import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import BottomNav from '../components/BottomNav';

function NoHabit({ navigation }) {
    return (
        <ImageBackground
        style={styles.bg}
        source={require('../assets/background2.png')}>
            <Text style={styles.bgtext}>Create New Habit.</Text>
            <Text style={styles.smtext}>Your current habits will appear here, create one by tapping on the plus button below.</Text>
            <BottomNav navigation={navigation}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgtext: {
        color: '#000',
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
        top: 70,
    },

    smtext: {
        color: '#545454',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        top: 73,
        width: 300,
    },
})

export default NoHabit;