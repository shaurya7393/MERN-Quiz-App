import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");
  const [valid, setValid] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign-in successful for user:', userCredential.user.uid);
      navigate('/quiz');
    } catch (error) {
      alert('Enter correct email or password');
      console.error('Sign-in error:', error.code, error.message);
    }
  };

  const sendOTP = async () => {
    if (!phoneNumber) {
      alert('Please fill in the phone number first.');
      return;
    }
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {})
      const number = "+91" + phoneNumber;
      const confirmation = await signInWithPhoneNumber(auth, number, recaptcha);
      setUser(confirmation);
      setValid(true);
    }
    catch (error) {
      // alert('Enter correct otp');
      console.log(error);
    }
  }
  // console.log(phoneNumber);
  const VerifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
      navigate('/quiz');
    }
    catch (error) {
      alert('enter correct otp');
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col'>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className='flex flex-col'>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-4' />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-4' />
        <button type="submit" className='mt-4 mr-20'>Sign In</button>
      </form>
      <div className='flex flex-col'>
        <div className='mt-3 flex justify-center mr-20'>OR</div>
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='mt-4' />
        <button className='mt-4 mr-20' onClick={sendOTP}>Verify number</button>
        <div id='recaptcha'></div>
        <input type='text' placeholder='Enter OTP' className='mt-4' onChange={(e) => setOtp(e.target.value)} disabled={!valid} />
        <button className='mt-4 mr-20' onClick={VerifyOtp}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
