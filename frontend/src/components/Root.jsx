import React, { useRef, useState } from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../redux/resultReducer';
// import { setUserId } from '../redux/resultReducer';
// import firebase from 'firebase/app';
// import 'firebase/auth';

const Root = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userID = useSelector(state => state.result.userID);
  const [username, setUsername] = useState("");
  

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  const StartTheQuiz = async () => {
     if(username){
       dispatch(setUserId(username));
       navigate('./sign');
     }
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-5xl font-bold mt-20 mb-10'>Quiz Application</h1>
      <ol className='flex flex-col items-start text-left mb-6 list-decimal list-inside'>
        <li className='mb-2'>You will be asked questions one after another.</li>
        <li className='mb-2'>10 points are awarded for the correct answer.</li>
        <li className='mb-2'>Each question has 4 options. Only 1 option is correct.</li>
        <li className='mb-2'>The result will be declared at the end of the quiz.</li>
      </ol>
      <form className='flex flex-col items-center'>
        <input
          type='text'
          placeholder='Username'
          className='mb-4 mt-2 p-3 border border-black rounded'
          onChange={handleInputChange}
          ref={inputRef}
        />
      </form>
      <div className='flex flex-col items-center'>
        <button className='bg-red-400 rounded-xl p-2' disabled={!username} onClick={StartTheQuiz}>Start the Quiz</button>
      </div>
    </div>
  );
};

export default Root;
