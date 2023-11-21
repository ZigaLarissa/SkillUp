import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CurrentHabits from './app/screens/CurrentHabits';
import AllHabits from './app/screens/AllHabits';

export default function App() {
  return (
    <View style={styles.container}>
      <AllHabits />

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
