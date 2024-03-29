import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import {useSelector,useDispatch} from 'react-redux';

import { moveNextAction, movePrevAction, startExam } from '../redux/questionReducer';
import { pushResultAction } from '../redux/resultReducer';
import {useNavigate} from 'react-router-dom';
import { getQuestions } from './Api';


const Quiz = () => {
  const dispatch= useDispatch();
  const Navigate=useNavigate();
  
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [allquestions,setAllquestions]=useState([]);
  // const [allanswers, setAllanswers] = useState([]);
  const quest = useSelector(state => state.questions.queue);  
  const state = useSelector(state => state.questions.trace);
  const results=useSelector(state=>state.result.result);
  


  const onPrev = () => {
    if(state>0)
    {
   dispatch(movePrevAction());
      setSelectedOption(undefined); 
    }
  }
  const onNext = () => {
    //insert new when we are on new question not previously marked
       

    if (state <quest.length)
    {
      if(results.length <=state)
      {
        
    dispatch(pushResultAction(selectedOption));
      }
    }
  
    if (state + 1 === quest.length) return; 
    setSelectedOption(undefined); 
    dispatch(moveNextAction());
    }
  
const onCheck=(index)=>{
  setSelectedOption(index);  
}

if(results.length && results.length===quest.length){
  Navigate(`/result`);
}
  
  useEffect(()=>{
     const fetchQuestions=async()=>{
      
      const res= await getQuestions(`${process.env.REACT_APP_URL}/api/questions`)
      const data=res.data;
      const [{questions,answers}]= data;
      setAllquestions(questions);
      //  setAllquestions(answer);
        
       dispatch(startExam({question: questions,answers}));
     }
     fetchQuestions();
  })
  return (
    <div className='flex flex-col items-center'>
      <div>
      <h1 className='text-center text-5xl font-bold mt-20 mb-10'>Quiz Application</h1>

      {/* display questions */}
        {allquestions.length > 0 && (<Questions onCheck={onCheck} selectedOption={selectedOption} setSelectedOption={setSelectedOption} allquestions={allquestions} />)}
        


      <div className='flex justify-between w-full mb-4'>
          {state > 0 ? <button
            className='bg-yellow-300 rounded-xl pl-4 pr-4 h-8'
            onClick={onPrev}
          >
            Previous
          </button>: <div></div>}
        

        <button
          className='bg-green-500 rounded-xl pl-4 pr-4 h-8'
          onClick={onNext}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
}

export default Quiz;
