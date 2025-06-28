// firebaseConfig.js

// ✅ Import these for basic Firebase + OTP Auth setup
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyD-l5CreUD4J2BnR50yjTBUgYhCsXLVR6k",
  authDomain: "nearkart-e63fb.firebaseapp.com",
  projectId: "nearkart-e63fb",
  storageBucket: "nearkart-e63fb.appspot.com",
  messagingSenderId: "813138472664",
  appId: "1:813138472664:android:ff434b6f001d4d4a79f1ad"
};

// ✅ Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Export both for usage in Login/Register screens
export { auth, RecaptchaVerifier };
