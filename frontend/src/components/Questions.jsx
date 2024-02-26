// import React, { useEffect, useState } from 'react';
// import Data from './database/Data';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateOptions } from '../redux/resultReducer';

// const Questions = ({ onCheck, selectedOption, setSelectedOption, allquestions }) => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.questions.trace);
//   const result = useSelector(state => state.result.result);
//   const { trace } = useSelector((state) => state.questions);

//   // useSelector((state)=>console.log(state));

//   // const question = Data[state];
//   // console.log(allquestions);
//   const question = allquestions[state];

//   useEffect(() => {
//     // console.log({ trace, selectedOption });
//     dispatch(updateOptions({ trace, selectedOption }));
//   }, [selectedOption]);

//   const handleOptionChange = (optionIndex) => {
//     setSelectedOption(optionIndex);
//     onCheck(optionIndex);
//     dispatch(updateOptions({ trace, selectedOption }));
//     // console.log({ trace, selectedOption });
//   };

//   return (
//     <div>
//       <h2 className='text-2xl pb-3'>
//         {question.id}. {question.question}
//       </h2>
//       <ul>
//         {question.options.map((quest, idx) => (
//           <li key={idx} className='text-xl'>
//             <input
//               type='radio'
//               value={idx}
//               name="options"
//               // className=''
//               checked={selectedOption === idx || result[trace] == idx}
//               id={`q-${idx}-option`}
//               onChange={() => handleOptionChange(idx)}
//             />
//             <label htmlFor={`q-${idx}-option`}
//               className={selectedOption === idx || result[trace] == idx ? ' bg-green-600' : ''}>
//               {quest}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Questions;





import React, { useEffect, useState } from 'react';
import Data from './database/Data';
import { useDispatch, useSelector } from 'react-redux';
import { updateOptions } from '../redux/resultReducer';

const Questions = ({ onCheck, selectedOption, setSelectedOption, allquestions }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.questions.trace);
  const result = useSelector(state => state.result.result);
  const { trace } = useSelector((state) => state.questions);

  // useSelector((state)=>console.log(state));

  // const question = Data[state];
  // console.log(allquestions);
  const question = allquestions[state];

  useEffect(() => {
    // console.log({ trace, selectedOption });
    dispatch(updateOptions({ trace, selectedOption }));
  }, [selectedOption]);

  const handleOptionChange = (optionIndex) => {
    setSelectedOption(optionIndex);
    onCheck(optionIndex);
    dispatch(updateOptions({ trace, selectedOption }));
    // console.log({ trace, selectedOption });
  };

  return (
    <div className='pb-4'>
      <h2 className='text-2xl pb-5'>
        {question.id}. {question.question}
      </h2>
      <ul>
        {question.options.map((quest, idx) => (
          <li key={idx} className={`text-xl pb-8 ${selectedOption === idx || result[trace] === idx ? 'has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200' : ''}`}>

            <input
              type='radio'
              value={idx}
              name="options"
              className='form-radio checked:border-red-500 h-4 w-4 mr-2 inline-flex items-center space-x-2 cursor-pointer'
              checked={selectedOption === idx || result[trace] == idx}
              id={`q-${idx}-option`}
              onChange={() => handleOptionChange(idx)}
            />
            <label htmlFor={`q-${idx}-option`}
              className={selectedOption === idx || result[trace] == idx ? 'inline-flex items-center space-x-2 cursor-pointer ' : 'inline-flex items-center space-x-2 cursor-pointer '}>
              {quest}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;













// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateOptions } from '../redux/resultReducer';

// const Questions = ({ onCheck, selectedOption, setSelectedOption, allquestions }) => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.questions.trace);
//   const result = useSelector(state => state.result.result);

//   useEffect(() => {
//     dispatch(updateOptions({ trace: state, selectedOption }));
//   }, [selectedOption, state]);

//   const handleOptionChange = (optionIndex) => {
//     setSelectedOption(optionIndex);
//     onCheck(optionIndex);
//   };

//   const question = allquestions[state];

//   return (
//     <div>
//       <h2 className='text-2xl pb-5'>
//         {question.id}. {question.question}
//       </h2>
//       <ul>
//         {question.options.map((quest, idx) => (
//           <li key={idx} className='text-xl pb-4'>
//             <input
//               type='radio'
//               value={idx}
//               name="options"
//               className=' for  h-4 w-10 mr-2'
//               checked={selectedOption === idx || result[state] === idx}
//               id={`q-${idx}-option`}
//               onChange={() => handleOptionChange(idx)}
//             />
//             <label htmlFor={`q-${idx}-option`} className={selectedOption === idx || result[state] === idx ? 'bg-green-600' : ''}>
//               {quest}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Questions;
