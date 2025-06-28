// screens/PhoneAuthScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { auth } from '../firebaseConfig';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

export default function PhoneAuthScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const recaptchaVerifier = React.useRef(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(id);
      alert('OTP sent successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      alert('Phone authentication successful!');
      navigation.navigate('Home');
    } catch (error) {
      alert('Invalid code or error verifying.');
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      />
      <TextInput
        placeholder="Enter phone number"
        onChangeText={(text) => setPhoneNumber('+91' + text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <Button title="Send OTP" onPress={sendVerification} />

      {verificationId && (
        <>
          <TextInput
            placeholder="Enter OTP"
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button title="Confirm OTP" onPress={confirmCode} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
