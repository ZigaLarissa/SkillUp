import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import axios from 'axios';

import Ionicons from '@expo/vector-icons/Ionicons';

function SignUp({ navigation }) {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSend = async () => {
        try {
            const response = await axios.post('', {
                userName,
                email,
                password,
            });
            console.log('User Added Successfully: ', response.data);

            // setUserName('');
            // setEmail('');
            // setPassword(''); //no need for cleaning up

            navigation.navigate('NoHabit'); //navigate to NoHabit screen
        }

        catch (error) {
            console.error('Error Adding User: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>

            <TextInput
            value={userName}
            onChangeText={setUserName}
            style={styles.input}
            placeholder='Username'
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

export default SignUp;