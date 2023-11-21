import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function Days(props) {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer}>
                <View style={styles.day}>
                    <Text style={styles.dayText}>All days</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Mon</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Tue</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Wed</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Thur</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Fri</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Sat</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>Sun</Text>
                </View>
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    day: {
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 35,
        margin: 5,
        borderRadius: 10,
    },

    dayText: {
        fontSize: 16,
    },
})

export default Days;