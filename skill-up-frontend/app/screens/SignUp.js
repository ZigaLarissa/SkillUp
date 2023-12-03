import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import axios from 'axios';

import Ionicons from '@expo/vector-icons/Ionicons';

import login from './Login';

function SignUp({ navigation }) {

    const [name, setName] = React.useState(''); //useState('') is the initial value of the variable [name, setName] is the variable name
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSend = async () => {
        try {
            // Signup
            const signupResponse = await axios.post('http://192.168.1.65:5000/User/', {
                name,
                email,
                password,
            });

            console.log('User Added Successfully: ', signupResponse.data);

            // Automatically login after signup
            //funtion will go here!

            navigation.navigate('NoHabit'); //navigate to NoHabit screen
        } catch (error) {
            console.error('Error Adding or Logging In User: ', error.response.data.detail);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>

            <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder='Name'
            />

            <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder='Email'
            />

            <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={onSend}>
                <Ionicons style={styles.addicon} name="add-circle-sharp"/>
                <Text style={styles.buttontext} >Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.logtext}>
                <Text style={styles.maxtext}>Already have an account? </Text> 
                <TouchableOpacity>
                    <Text
                    onPress={() => navigation.navigate('Login')} 
                    style={styles.mintext}>Login.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 230,
    },

    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center',
        marginBottom: 60,
    },

    input: {
        height: 50,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        padding: 10,
        marginBottom: 20,
    },

    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
    },

    buttontext: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center',
    },

    addicon: {
        color: '#fff',
        fontSize: 24,
        alignSelf: 'center',
    },

    logtext: {
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    mintext: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },

    maxtext: {
        color: '#000',
        fontSize: 18,
    },
});

export default SignUp;