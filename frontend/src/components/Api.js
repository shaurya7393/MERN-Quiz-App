import axios from "axios";

export const getQuestions=async(url)=>{
    const data=await axios.get(url);
    return data;
}

// export const postResult=async(url)=>{
//     const res= await axios.post(url,{})
//     return res.data;
// }



    // const publishResult = async (resultData) => {
    //     const { result, username } = resultData;
    //     try {
    //         if (result !== [] && !username) throw new Error("could not get result");
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }