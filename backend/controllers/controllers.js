
const Question= require("../models/questionModel.js")
const {data,answers} = require("../database/Data.js");
const Result = require("../models/resultModel.js");

// it is to get all questions
const getQuestions = async (req, res) => {
    try {
        const q = await Question.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch questions" });
    }
};

// it is to post all questions
const insertQuestions = async (req, res) => {
    try{
       await Question.insertMany({questions : data,answers : answers})
        res.json("questions posted success");
    }
    catch(error){
        res.status(500).json({error: "Failed to insert questions"})
    }
    
};
// it is to delete all questions
const deleteQuestions = async (req, res) => {
    try{
        await Question.deleteMany();
        res.json("questions deleted success");
      }
      catch(error){
        res.status(500).json({ error: "Failed to delete questions" })
      }
};

// it is to get all result
const getResult = async (req, res) => {
    try{
        const r = await Result.find()
        res.json(r);
    }
    catch(error){
        res.status(500).json({error:"failed to get result"})
    }
};

// it is to post all result
const postResult = async (req, res) => {
    try{
        const {username,result,attempts,points,achieved}=req.body;
        if(!username && !result) throw new Error("Data not found");

        await Result.create({ username, result, attempts, points, achieved })
        res.json("Result posted success")
    }
    catch(error){
        res.status(500).json({ error: "failed to post result" })
    }
};

// it is to delete all result
const deleteResult = async (req, res) => {
try{
    await Result.deleteMany();
    res.json("Result deleted success");
   }
   catch(error){
    res.status(500).json({ error: "failed to delete result" })
   }
};


module.exports = { getQuestions,insertQuestions,deleteQuestions,getResult,postResult,deleteResult};
