import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './app/screens/GetStarted';
import NoHabit from './app/screens/NoHabit';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="NoHabit" component={NoHabit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
