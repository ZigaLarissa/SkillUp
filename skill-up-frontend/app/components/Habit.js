import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Delete from './Delete';
import Update from './Update';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function Habit() {
  const [habitData, setHabitData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const response = await axios.get('http://192.168.1.65:5000/task/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('API Response:', response.data);

      const tasks = response.data;
      setHabitData(tasks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTaskDelete = () => {
    // This function will be passed to the Delete component to refetch tasks after delete
    fetchData();
  };

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        habitData.map((task, index) => (
          <View key={index} style={styles.container}>
            <Ionicons style={styles.icon} name="checkmark-circle-outline" />
            <View style={styles.content}>
              <Text style={styles.bgtext}>{task.title}</Text>
              <Text style={styles.smtext}>{task.body}</Text>
            </View>
            <Update />
            {/* Log the task ID here */}
            {console.log('Task ID:', task.id)}
            <Delete taskId={task.title} onDelete={handleTaskDelete} />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#59D5A0',
    width: '95%',
    height: 80,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  icon: {
    color: '#1D3035',
    fontSize: 50,
    paddingHorizontal: 10,
  },

  content: {
    width: '60%',
  },

  bgtext: {
    color: '#1D3035',
    fontWeight: 'bold',
    fontSize: 18,
  },

  smtext: {
    color: '#545454',
    fontSize: 14,
  },
});

export default Habit;
