import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Habit from '../components/Habit';
import BottomNav from '../components/BottomNav';

function CurrentHabits({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.motivationBox}>
                <Text style={styles.motivationText}>Do it for the plot!</Text>
            </View>

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

            <BottomNav navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },

    motivationBox: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        top: 80,
    },
    
    motivationText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    box: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '34%',
        width: '100%',
        top: 100, //remove this if you want to show the motivation text
        marginVertical: 10,
    },

    content: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-start',
    },

    bgtext: {
        color: '#1D3557',
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