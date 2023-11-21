import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Days from '../components/Days';
import Habit from '../components/Habit';
import BottomNav from '../components/BottomNav';

function AllHabits(props) {
    return (
        <View style={styles.container}>
           <Days />

           <ScrollView contentContainerStyle={styles.habits}>
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
           </ScrollView>

           <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
    },

    habits: {
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
})

export default AllHabits;