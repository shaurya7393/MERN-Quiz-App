import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { resetAllQuestions } from '../redux/questionReducer';
import { resetAllResult } from '../redux/resultReducer';
import { answers } from './database/Data';
import { combineSlices } from '@reduxjs/toolkit';
import axios from "axios";
// import { postResult } from './Api';

const Result = () => {
  const dispatch = useDispatch();
  const quest = useSelector(state => state.questions.queue);
  const result = useSelector(state => state.result.result);
  const state = useSelector(state => state);
  const { userId } = useSelector(state => state.result);
  // console.log(userId);
  // console.log(result);

  const helperForAttemted = (result) => {
    return result.filter(item => item !== undefined);
  }
  const helperForPoints = (attempted, answers) => {
    let count = 0;
    for (let i = 0; i < attempted.length; i++) {
      if (attempted[i] === answers[i]) count++;
    }
    return count * 10;
  }


  const totalPoints = quest.length * 10;

  const attempted = helperForAttemted(result);
  const attempts = attempted.length;
  //  console.log(answers);
  const earnedPoint = helperForPoints(attempted, answers);
  // console.log(earnedPoint);
  let flag = 1;
  if ((totalPoints * 0.5) > earnedPoint) {
    flag = 0;
  }

  const userPublishResult = async (resultData) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/api/result`, resultData);
      console.log(res.data); // Logging the response
      return res.data;
    } catch (error) {
      console.error("Error publishing result:", error);
      throw error; // Rethrow the error for handling
    }
  }

  useEffect(() => {
    // Call userPublishResult when component mounts
    userPublishResult({ username: userId, attempts, points: earnedPoint, result, achieved: flag ? "Passed" : "Fail" });
  }, []); // Empty dependency array to ensure it only runs once on mount


  const resetAll = () => {
    dispatch(resetAllQuestions());
    dispatch(resetAllResult());
  }
  return (
    <div>
        <h1 className='text-center text-5xl font-bold mt-20 mb-10'>Quiz Application</h1>

        <div className='flex flex-col items-center text-xl gap-4'>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Username:</span>
            <span className='pl-2'> {userId} </span>
          </div>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Total Quiz Points:</span>
            <span className='pl-2'>{totalPoints || 0}</span>
          </div>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Total Questions:</span>
            <span className='pl-2'>{quest.length || 0}</span>
          </div>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Total Attempts:</span>
            <span className='pl-2'>{attempted.length || 0}</span>
          </div>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Total Earn Points:</span>
            <span className='pl-2'>{earnedPoint || 0}</span>
          </div>
          <div className="flex justify-between"> {/* Add this line */}
            <span>Quiz Result:</span>
            <span className={`pl-2 pb-3 ${flag === 1 ? "text-green-500" : "text-red-600"}`}>
              {flag ? "Passed" : "Fail"}
            </span>
          </div>
         <div>
          <Link to='/' onClick={resetAll} className='text-white bg-red-600 w-10 h-10 rounded-lg p-2 '>
          Restart
        </Link>
      </div>
      </div>

    </div>
  )
}

export default Result
