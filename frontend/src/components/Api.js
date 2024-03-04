import axios from "axios";

export const getQuestions=async(url)=>{
    const data=await axios.get(url);
    return data;
}

