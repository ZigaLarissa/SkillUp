import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './app/screens/GetStarted';
import NoHabit from './app/screens/NoHabit';
import AddHabit from './app/screens/AddHabit';
import CurrentHabits from './app/screens/CurrentHabits';
import AllHabits from './app/screens/AllHabits';
import SignUp from './app/screens/SignUp';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="NoHabit" component={NoHabit} />
        <Stack.Screen name="AddHabit" component={AddHabit} />
        <Stack.Screen name="CurrentHabits" component={CurrentHabits} />
        <Stack.Screen name="AllHabits" component={AllHabits} />
        <Stack.Screen name="Login" component={Login} />
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
