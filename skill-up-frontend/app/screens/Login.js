import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import axios from 'axios';

import Ionicons from '@expo/vector-icons/Ionicons';

function Login({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSend = async () => {
        try {
            const response = await axios.post('http://192.168.1.65:8081/login/', {
                email,
                password,
            });
            console.log('User logged in Successfully: ', response.data);

            navigation.navigate('NoHabit'); //navigate to NoHabit screen
        }

        catch (error) {
            console.error('Error Adding User: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>

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
                <Text style={styles.buttontext} >Login</Text>
            </TouchableOpacity>
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
});

export default Login;