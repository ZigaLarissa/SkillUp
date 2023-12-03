import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage library

import Ionicons from '@expo/vector-icons/Ionicons';
import Delete from './Delete';
import Update from './Update';

function Habit(props) {
    const onSend = async () => {
        try {
            // Make an API call to your FastAPI backend
            // Retrieve token
            const accessToken = await AsyncStorage.getItem('accessToken');
    
            const response = await axios.get('http://192.168.1.65:5000/task/', {
                title: newHabit,
                body: newDescription,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // auth token
                }
            });
    
            console.warn('Adding: ', newHabit);
            console.log('Response from the server:', response);
    
            //setNewHabit('');
            //setNewDescription('');
    
            navigation.navigate('CurrentHabits');
        } catch (error) {
            console.error('Error creating habit:', error.message);
        }
    
    };
    
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