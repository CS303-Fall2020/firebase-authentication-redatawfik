import React from 'react';
import Navigator from './routes/HomeStack';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCtZ_2c3vbLS1L-O9JLy0QMjT1kMHFpNas',
  authDomain: 'react-firebase-80cf0.firebaseapp.com',
  databaseURL: 'https://react-firebase-80cf0.firebaseio.com',
  projectId: 'react-firebase-80cf0',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const App: () => React$Node = () => {
  return <Navigator />;
};
export default App;
