import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDTne8YSoAtG1SX1lt7wRW1rfytpL3WE8k',
  authDomain: 'codefactrory.firebaseapp.com',
  projectId: 'codefactrory',
  storageBucket: 'codefactrory.appspot.com',
  messagingSenderId: '1083208379281',
  appId: '1:1083208379281:web:b810f2632cde7b72ef8830',
  measurementId: 'G-X6T5Q61R9R',
};
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default db;
