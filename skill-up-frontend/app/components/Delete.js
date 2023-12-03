import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function Delete(props) {
    onClick = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
              const response = await axios.delete('http://192.168.1.65:5000/task/1',
              {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // auth token
                }
            });

            console.log('Deleted Successfully! ', response.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <Ionicons style={styles.deleteicon} name="close-circle-outline" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '10%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    deleteicon: {
        color: '#1D3035',
        fontSize: 30,
        alignSelf: 'center',
    },
})

export default Delete;