import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdUfRVws-t7vbtqqZ1d9Rx9Rvlem9US6M",
  authDomain: "evp1-aefbe.firebaseapp.com",
  projectId: "evp1-aefbe",
  storageBucket: "evp1-aefbe.firebasestorage.app",
  messagingSenderId: "485322571346",
  appId: "1:485322571346:web:f6e9010d8a4f07f534e98b"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
