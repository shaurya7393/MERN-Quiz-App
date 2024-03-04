import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleSignIn=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/api/login`, { username, password });
      console.log(response);
      if(response.status===200){
        navigate('/quiz');
      }
    } catch (error) {
      console.error('Sign-up error:', error.code, error.message);
    }
  }

  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className='mb-8 text-3xl text-center"'>Sign In</h1>
      <form onSubmit={handleSignIn}className='flex flex-col'>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className='block border border-grey-light w-full p-3 rounded mb-4' />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='block border border-grey-light w-full p-3 rounded mb-4' />
            <button type="submit" className='w-full text-center py-3 rounded bg-green-300 text-white hover:bg-green-500 focus:outline-none my-1'>Sign In</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default SignIn;
