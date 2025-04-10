import React,{useEffect,useState} from 'react';
import motivation_pic from "../assets/image.png"
import pic from "../assets/my_main_pic.jpg"
// import { BarChart } from '@mui/x-charts/BarChart';
import {BarChart,ResponsiveContainer,XAxis,YAxis,CartesianGrid,Legend,Tooltip,Bar} from 'recharts'
import {useUser} from '@clerk/clerk-react';
function Home() {
  const {user}=useUser();
  const user_id=user.id;
  const user_email=user.emailAddresses[0].emailAddress;
  const user_name=user.username;
  const last_sign_at=user.lastSignInAt.getDate();
  const [mooddata, setmoodData] = useState([[10,10,10,10],[20,20,20,20]]);
  const sendUserDetails = async () => {
    if (!user) return;
    try {
      await fetch('http://localhost:5000/dashboard/getuserdetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id,user_email,user_name,last_sign_at }),
      });
    } catch (error) {
      console.log('Error sending user details to the backend:', error);
    }
  };
  const getMoodArray = async (user_id) => {
    try {
      const response = await fetch(`http://localhost:5000/dashboard/moodscore?userid=${user_id}`);
      const data=await response.json();
      setmoodData(data);
    } catch (error) {
      console.error("Error fetching mood array:", error);
    }
  };

    useEffect(() => {
      sendUserDetails();
     getMoodArray(user_id);
    }, []);
  const date=new Date();
  const hours=date.getHours();
  let greetings="Hello";
  if(hours<12){
    greetings="Good Morning";
  }
  else if(hours>=12 && hours<17){
    greetings="Good Afternoon";
  }
  else{
    greetings="Good Evening";
  }
 

  const sendmoodval = async (num) => {
    try {
      const response = await fetch('http://localhost:5000/dashboard/moodscore/moodval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood: num,userid:user_id }),
      });
    } catch (error) {
      console.error("Error sending mood value:", error);
    }
  };
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]
  
  return (
    <div className="p-8 space-y-8">
      {/* Centered Greeting Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{greetings},{user?.firstName ? `${user.firstName}` : user?.username || 'User'}</h1>
      </div>

      {/* Three Row Sections */}
      <div className="space-y-6">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
            <img 
              src={motivation_pic}
              alt="Workspace"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">How are you feeling today?</h2>
            <div className="grid grid-rows-2 gap-6 h-[calc(100%-6rem)]">
              {/* First Row - 3 emojis */}
              <div className="grid grid-cols-3 gap-4 ">
                <button className="flex flex-col items-center justify-center lg:p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group" onClick={()=>sendmoodval(8)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😊</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Happy</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group"onClick={()=>sendmoodval(5)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😌</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Peaceful</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group"onClick={()=>sendmoodval(9)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😇</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Blessed</span>
                </button>
                
              </div>
              {/* Second Row - 2 emojis */}
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group"onClick={()=>sendmoodval(-7)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😭</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Crying</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group"onClick={()=>sendmoodval(-3)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😰</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Stressed</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group"onClick={()=>sendmoodval(-5)}>
                  <span className="text-4xl lg:text-7xl  mb-2">😔</span>
                  <span className="text-white text-sm hidden lg:block group-hover:text-purple-300" >Depressed</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 bg-white backdrop-blur-sm rounded-xl overflow-hidden flex justify-center items-center">
          {/* <BarChart 
      series={[
        { data: mooddata[0] },
        { data: mooddata[1] },
      ]}
      height={290}
      xAxis={[{ data: ['week 1', 'week 2', ' week 3', 'week4'], scaleType: 'band' }]}
      margin={{ top: 20, bottom: 30, left: 40, right: 10 }}
    /> */}
    <ResponsiveContainer width="100%" height="90%">
    <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#ff0000" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
  </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white backdrop-blur-sm rounded-xl overflow-hidden flex flex-col p-2 items-center lg:gap-2 gap-1 " >
          <h1 className="text-xl font-semibold mt-4 lg:text-4xl">Need a consultation?</h1>
          <div className="flex flex-col justify-between gap-1 lg:gap-3 mt-2 lg:w-4/5">
             <div className="flex justify-between text-center gap-2 bg-sky-100 p-2 rounded-lg ">
              <img src={pic} className="w-14 lg:w-32 rounded-full" alt="" />
              <h2 className="text-sm lg:text-2xl">Richa Cocaine <br /><span className="font-light">Phsyciatrist</span> <span className="hidden lg:block text-2xl font-thin">
                </span></h2>
              <button className=" rounded-full text-lg lg:text-4xl">💬</button>
             </div>
             <div className="flex justify-between text-center gap-2 bg-sky-100 p-2 rounded-lg ">
              <img src={pic} className="w-14 lg:w-32 rounded-full" alt="" />
              <h2 className="text-sm lg:text-2xl">Richa Cocaine <br /><span className="font-light">Phsyciatrist</span> <span className="hidden lg:block text-2xl font-thin">
                </span></h2>
              <button className=" rounded-full text-lg lg:text-4xl">💬</button>
             </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 text-lg rounded-xl mt-5 lg:mt-0 lg:text-3xl hover:scale-105">
            more
          </button>
          </div>
        </div>

        {/* Third Row - Full Width */}
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-white">You are on right platform!</h2>
            {/* <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              View All
            </button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-sm md:text-md lg:text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus .
             </div>
            </div>
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-sm  md:text-md lg:text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus .
             </div>
            </div>
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-sm md:text-md lg:text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus .
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;