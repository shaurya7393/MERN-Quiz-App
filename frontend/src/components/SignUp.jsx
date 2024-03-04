// SignUp.js
import React, { useState } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// const auth = getAuth();
function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/api/signup`,{username,password});
      console.log(response);
    } catch (error) {
      console.error('Sign-up error:', error.code, error.message);
    }
  };
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    navigate('/login'); // Navigate to '/login' using the navigate function
  };
  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className='mb-8 text-3xl text-center"'>Sign Up</h1>
      <form  onSubmit={handleSignUp}className='flex flex-col'>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='block border border-grey-light w-full p-3 rounded mb-4'/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='block border border-grey-light w-full p-3 rounded mb-4' />
            <button type="submit" className='w-full text-center py-3 rounded bg-green-300 text-white hover:bg-green-500 focus:outline-none my-1' onClick={handleSignUp} >Sign Up</button>
      </form>
      <div className='mt-2'>
       <span className='p-2'>Already have an account</span>
            <a className='underline text-red-500' onClick={handleClick}>Login</a>
          </div>
      </div>
      </div>
    </div>
  );
}

export default SignUp;
