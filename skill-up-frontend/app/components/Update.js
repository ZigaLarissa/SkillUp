import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

function Update(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
                <Ionicons style={styles.updateicon} name="pencil-outline" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '10%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    updateicon: {
        color: '#1D3035',
        fontSize: 30,
        alignSelf: 'center',
    },
})

export default Update;