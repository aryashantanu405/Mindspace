import React from 'react';
import motivation_pic from "../assets/image.png"
import pic from "../assets/my_main_pic.jpg"
import { BarChart } from '@mui/x-charts/BarChart';
import {useUser} from '@clerk/clerk-react';
function Home() {
  const {user}=useUser();
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
                <button className="flex flex-col items-center justify-center lg:p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😊</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Happy</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😌</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Peaceful</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😇</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Blessed</span>
                </button>
                
              </div>
              {/* Second Row - 2 emojis */}
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😭</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Crying</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😰</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Stressed</span>
                </button>
                <button className="flex flex-col items-center justify-center p-1 bg-white/5 rounded-xl hover:bg-white/10 transition-all hover:scale-105 group">
                  <span className="text-4xl lg:text-7xl  mb-2">😔</span>
                  <span className="text-white text-sm group-hover:text-purple-300">Depressed</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3 bg-white backdrop-blur-sm rounded-xl overflow-hidden flex justify-center items-center">
          <BarChart
      series={[
        { data: [5, 14, 8, 17] },
        { data: [25, 16, 22, 13] },
        // { data: [15, 25, 30, 50] },
        // { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['week 1', 'week 2', ' week 3', 'week4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white backdrop-blur-sm rounded-xl overflow-hidden flex flex-col p-2 items-center lg:gap-6 gap-1" >
          <h1 className="text-xl font-semibold mt-4 lg:text-4xl">Need a consultation?</h1>
          <div className="flex flex-col justify-between gap-3 mt-2 lg:w-4/5">
             <div className="flex justify-between text-center gap-2 bg-sky-100 p-2 rounded-lg ">
              <img src={pic} className="w-14 lg:w-32 rounded-full" alt="" />
              <h2 className="lg:text-3xl">Richa Cocaine <br /><span className="font-light">Phsyciatrist</span> <span className="hidden lg:block text-2xl font-thin">
                MBBS,NIT PATNA</span></h2>
              <button className=" rounded-full text-lg lg:text-4xl">💬</button>
             </div>
             <div className="flex justify-between text-center gap-2 bg-sky-100 p-2 rounded-lg ">
              <img src={pic} className="w-14 lg:w-32 rounded-full" alt="" />
              <h2 className="lg:text-3xl">Richa Cocaine <br /><span className="font-light">Phsyciatrist</span> <span className="hidden lg:block text-2xl font-thin">
                MBBS,NIT PATNA</span></h2>
              <button className=" rounded-full text-lg lg:text-4xl">💬</button>
             </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-1 text-lg rounded-xl mt-5 lg:text-3xl">
            more
          </button>
          </div>
        </div>

        {/* Third Row - Full Width */}
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-white">You are on right platform!</h2>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus perspiciatis aperiam placeat nisi omnis explicabo laudantium blanditiis magni soluta expedita, accusamus enim iusto.
             </div>
            </div>
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus perspiciatis aperiam placeat nisi omnis explicabo laudantium blanditiis magni soluta expedita, accusamus enim iusto.
             </div>
            </div>
            <div className="bg-white rounded-lg p-4">
             <div className="flex justify-start items-center gap-6 p-4">
              <img className="w-14 rounded-full" src={pic} alt="" />
              <h2 className="text-xl font-semibold">"Killing depression everyday"</h2>
             </div>
             <div className="p-4 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse molestiae nobis quas corrupti repellendus temporibus perspiciatis aperiam placeat nisi omnis explicabo laudantium blanditiis magni soluta expedita, accusamus enim iusto.
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;