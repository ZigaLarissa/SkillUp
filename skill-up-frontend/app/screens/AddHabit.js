import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import axios from 'axios'; // Import axios library


import Days from '../components/Days';
import Ionicons from '@expo/vector-icons/Ionicons';
import ColorLabels from '../components/ColorLabels';

function AddHabit({ navigation }) {
    const [newHabit, setNewHabit] = React.useState('');
    const [newDescription, setNewDescription] = React.useState('');

    const onSend = async () => {
        try {
            // Make an API call to your FastAPI backend
            const response = await axios.post('http://192.168.1.65:8081/task/', {
                title: newHabit,
                description: newDescription,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, // auth token
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
            <Text style={styles.habtext} >Habit</Text>
            <TextInput
            value={newHabit}
            onChangeText={setNewHabit} 
            style={styles.habinput} 
            placeholder='Type a new habit...'
            />

            <Text style={styles.destext} >Description</Text>
            <TextInput
            value={newDescription}
            onChangeText={setNewDescription} 
            style={styles.desinput} 
            placeholder="Type the habit's description..."
            />

            <Text style={styles.remsubtitle} >Click on days to remind</Text>
            <Days />

            <Text style={styles.colsubtitle} >Select label color</Text>
            <ColorLabels />

            <TouchableOpacity style={styles.button} onPress={onSend}>
                <Ionicons style={styles.addicon} name="add-circle-sharp"/>
                <Text style={styles.buttontext} >Create new habit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
    },

    habtext: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginLeft: 20,
    },

    habinput: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    destext: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginLeft: 20,
    },

    desinput: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    remsubtitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#545454',
        marginTop: 40,
        marginLeft: 20,
    },

    colsubtitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#545454',
        marginTop: 10,
        marginLeft: 20,
    },

    button: {
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 10,
        marginTop: 150,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    addicon: {
        fontSize: 28,
        color: '#fff',
    },

    buttontext: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center',
    },
})

export default AddHabit;