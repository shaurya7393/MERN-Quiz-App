import { createSlice } from "@reduxjs/toolkit";

export const questionReducer= createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0,
    },
    reducers:{
        startExam : (state,action)=>{
            let {question, answers}=action.payload
            return{
            ...state,
            queue:question,
            answers: answers,
            }
        },
        moveNextAction:(state,action)=>{
            return {
                ...state,
                trace:state.trace+1,
            }
        },
        movePrevAction: (state, action) => {
            return {
                ...state,
                trace: state.trace-1,
            }
        },
        resetAllQuestions: (state,action)=>{
            return {
                queue: [],
                answers: [],
                trace: 0,
            }
        }
    }
})


export const { startExam, moveNextAction, movePrevAction, resetAllQuestions }=questionReducer.actions

export default questionReducer.reducer;