import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart is Empty</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
