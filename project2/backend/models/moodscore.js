import mongoose from "mongoose";
const mooddataschema =new mongoose.Schema({
  userid:String,
  moodarray:[[Number]],
  moodval:Number
});

const mooddata=mongoose.model('mooddata',mooddataschema,'Emotions');
export default mooddata;