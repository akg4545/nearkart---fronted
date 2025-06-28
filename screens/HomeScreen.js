// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      alert('Logout failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to NearKart!</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>🛍️ Products</Text>
        <Text>View nearby shop products.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>🧾 Orders</Text>
        <Text>Check and manage your orders.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>👤 Profile</Text>
        <Text>Edit your profile and settings.</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} color="red" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
});
