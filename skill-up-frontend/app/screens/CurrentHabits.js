import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Habit from '../components/Habit';
import BottomNav from '../components/BottomNav';

function CurrentHabits(props) {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.motivation}>You are Kicking It!</Text> */}

            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.bgtext}>Pending</Text>
                    <Text style={styles.smtext}>You have 2 pending habits.</Text>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.habits}>
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                </ScrollView>
            </View>

            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.bgtext}>Completed</Text>
                    <Text style={styles.smtext}>You have 2 completed habits.</Text>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer} style={styles.habits}>
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                    <Habit />
                </ScrollView>
            </View>

            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },

    // motivation: {
    //     color: '#1D3035',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //     alignSelf: 'center',
    //     top: 65,
    //     marginBottom: 70,
    // },

    box: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '38%',
        width: '100%',
        top: 50, //remove this if you want to show the motivation text
        marginVertical: 10,
    },

    content: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-start',
    },

    bgtext: {
        color: '#1D3035',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        left: -20,
    },

    smtext: {
        color: '#545454',
        fontSize: 14,
        alignSelf: 'center',
        right: -20,
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    habits: {
        width: '100%',
        overflow: 'scroll',
    },
})

export default CurrentHabits;