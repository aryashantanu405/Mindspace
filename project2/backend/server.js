import express from 'express'
const app = express();
import cors from 'cors';
app.use(cors());
import connectDB from './connect.js';
connectDB();
import TestData from './models/testdata.js';
import mooddata from './models/moodscore.js';
import User_Data from './models/user.model.js';
app.use(express.json());  // to parse JSON requests
let num=0;
let moodscore=0;
app.get('/dashboard/moodscore',async (req,res)=>{
  const user_id=req.query.userid;
  const user=await User_Data.findOne({userid:user_id});
  if(user){
    const moodarray=user.mooddata;
    res.json(moodarray);
  } 
})
app.post('/dashboard/moodscore/moodval', async(req, res) => {
   num = req.body.mood;  // Correctly accessing num
   const user_id=req.body.userid;
   try{
    const user= await User_Data.findOneAndUpdate({userid:user_id},
      {$set:{moodval:num} })
   }
   catch(error){
    console.log('there is some error in mood val updation',error);
   }
  
   
});
app.post('/dashboard/getuserdetail',async (req, res) => {
  // console.log(req.body)
  const { user_id,user_name,user_email,last_sign_at} = req.body;
  const is_user = await User_Data.findOne({ userid: user_id });
  if (!is_user) {
    const date = new Date(); 
    const created_at = date; 
    const newuser = new User_Data({
      userid: user_id,
      username: user_name,
      email: user_email,
      created_at: created_at,
      last_sign_at: last_sign_at,
      mooddata:[[2,2,2,2],[3,3,3,3]],
      moodval:0,
    });
  
    const saveduser = await newuser.save();
  }
  
  // console.log("User data received:", user_name);
  res.status(200).json({ message: "User received successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
