import { createSlice } from "@reduxjs/toolkit"

export const resultReducer=createSlice({
 name:'result',
 initialState:{
   userId:"",
   result:[]
 },
 reducers:{
        setUserId:(state,action)=>{
          const Id=action.payload;
          // console.log(Id);
            state.userId=Id;
            // console.log(state.userId);
        },
        pushResultAction: (state,action)=>{
          state.result.push(action.payload)
        },
        resetAllResult: (state, action) => {
        state.userId="";
         state.result=[];
        },
        updateOptions: (state, action) => {
          const {trace, selectedOption } = action.payload;
          
          state.result.fill(selectedOption,trace,trace+1);
     },
    }
 }
 )

export const { setUserId, pushResultAction, resetAllResult, updateOptions }=resultReducer.actions;

export default resultReducer.reducer;