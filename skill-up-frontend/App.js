import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import GetStarted from './app/screens/GetStarted';
import NoHabit from './app/screens/NoHabit';
import BottomNav from './app/components/BottomNav';
import Habit from './app/components/Habit';

export default function App() {
  return (
    <View style={styles.container}>
      <Habit />

      <StatusBar style="auto" />
    </View>
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
