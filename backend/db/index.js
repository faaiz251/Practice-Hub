import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

  const problemSchema =new mongoose.Schema({
    title:String,
    difficulty:String,
    description:String,
    codeSnippet:String,
    testcases:[{
        input:Object,
        expectedOutput:String
    }]
})
  
export const User = mongoose.model('User', userSchema);
export const Problem = mongoose.model('Problem', problemSchema);
