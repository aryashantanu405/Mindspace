import mongoose from "mongoose";

const userschema=new mongoose.Schema({
  userid:String,
  email:String,
  username:String,
  created_at:Date,
  last_sign_at:Date,
  mooddata:Array,
  moodval:Number,
});
const User_Data=mongoose.model('user_data',userschema,'usercollection');
export default User_Data;