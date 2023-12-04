import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from '@expo/vector-icons/Ionicons';



function Login({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const requestBody = {
              username: username,
              password: password,
            };

            console.log(requestBody);
        
            const response = await axios.post(
              'http://localhost:5000/login/',
              requestBody,
              
              {
                auth: {
                  username: username,
                  password: password,
                },
        
                headers: {
                    // 'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',
                },
              },
            );

            // Store token
            await AsyncStorage.setItem('accessToken', response.data.access_token);
            
            console.log('Token stored!', response.data);

            // Navigate to NoHabit screen
            navigation.navigate('NoHabit');

          } catch (err) {
            console.log(err.message);
            console.log(err);
        }
    };
    

      
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>

            <TextInput
            value={username}
            onChangeText={setUsername}
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
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