import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function Delete({ taskId, onDelete }) {
    const onClick = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        try {
            const response = await axios.delete(`http://192.168.1.65:5000/task/${taskId}`, {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });

            console.log('Deleted Successfully! ', response.data);

            // If onDelete is provided as a prop, invoke it to trigger a re-render or any other necessary action
            if (onDelete) {
                onDelete();
            }
        } catch (err) {
            console.log('Error deleting task:', err);
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
});

export default Delete;
