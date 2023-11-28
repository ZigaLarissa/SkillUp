import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/background1.png')} />
            <Text style={styles.bgtext} >Start Small, Go Big!</Text>
            <Text style={styles.smtext} >Focus on one small, positive habit a day.</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttontext} >Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // white
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    bgtext: {
        color: '#000', // black
        fontSize: 34,
        fontWeight: 'bold',
        position: 'absolute',
        top: 550,
    },

    smtext: {
        color: '#545454',
        fontSize: 20,
        position: 'absolute',
        top: 600,
        width: '70%',
        textAlign: 'center',
        lineHeight: 20,
    },

    button: {
        backgroundColor: "#59D5A0",
        width: 150,
        height: 50,
        top: 680,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 2,
    },

    buttontext: {
        color: '#1D3035',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default GetStarted;