// SignUp.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      console.log('Sign-up successful for user:', userCredential.user);
      // You can redirect the user to another page after successful sign-up
    } catch (error) {
      console.error('Sign-up error:', error.code, error.message);
    }
  };

  return (
    <div className='flex flex-col'>
      <h2 >Sign Up</h2>
      <form  className='flex flex-col'>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-4'/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-4' />
        <button type="submit" className='mt-4 mr-20' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
