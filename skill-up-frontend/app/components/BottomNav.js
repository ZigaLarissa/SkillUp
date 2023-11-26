import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

function BottomNav({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Ionicons
            onPress={() => navigation.push('CurrentHabits')}
            style={styles.icon} name="home-outline"/> */}

            <TouchableOpacity onPress={() => navigation.push('CurrentHabits')}>
                <Ionicons style={styles.icon} name="home-outline" />
            </TouchableOpacity>

            <Ionicons 
            onPress={() => navigation.push('AddHabit')}
            style={styles.mainicon} name="add-circle-sharp"/>
            

            <Ionicons 
            onPress={() => navigation.push('AllHabits')}
            style={styles.icon} name="folder-outline"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
    },

    icon: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center',
    },

    mainicon: {
        color: '#fff',
        fontSize: 60,
        alignSelf: 'center',
    },
})

export default BottomNav;