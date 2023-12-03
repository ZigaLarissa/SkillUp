import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

function Delete(props) {
    return (
        <View style={styles.container}>
            <Ionicons style={styles.deleteicon} name="close-circle-outline" />
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