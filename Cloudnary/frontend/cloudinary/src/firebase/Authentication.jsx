import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Initialize Firebase with your configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
const firebaseConfig = {
    apiKey: "AIzaSyBZhGPDbfK9H-O-Gi3wUqwFrdPbNCdzJAo",
    authDomain: "ridedost-5fc72.firebaseapp.com",
    databaseURL: "https://ridedost-5fc72-default-rtdb.firebaseio.com",
    projectId: "ridedost-5fc72",
    storageBucket: "ridedost-5fc72.appspot.com",
    messagingSenderId: "641274738486",
    appId: "1:641274738486:web:811b48f2f648e62e8aa597",
    measurementId: "G-EFPS8GCG1P"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User is signed in, you can redirect or perform other actions here.
    } catch (error) {
        console.log(error)
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Authentication Example</h1>
      {auth.currentUser ? (
        <>
          <p>Welcome, {auth.currentUser.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default Authentication;
