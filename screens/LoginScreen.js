// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Phone Auth" onPress={() => navigation.navigate('PhoneAuth')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
