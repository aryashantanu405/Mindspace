import React from 'react'
import pic from "../assets/brainlogo.jpg"
import sad from "../assets/sad.png"
import smile from "../assets/smile.png";
import stressed from "../assets/stressed.png"
import { BarChart } from '@mui/x-charts/BarChart';
const Userprofile = () => {
  return (
    <div className="min-h-screen bg-white grid grid-cols-3 grid-rows-4 gap-4 p-2">
      <div className="bg-gray-200 row-span-4 rounded-lg flex flex-col gap-2 p-2 border-blue-500">
          <div className=" min-w-full flex justify-center items-center flex-col gap-1">
            <img className="w-64 md:w-72 rounded-full" src={pic} alt="" />
            <h1 className="md:text-4xl font-semibold">Rachit Kumar</h1>
          </div>
          <div className=" min-w-full border-lime-100 flex text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorem ullam natus molestiae fuga, consectetur quo et sunt quisquam libero nesciunt iure iusto omnis voluptates blanditiis? Hic possimus quam sint!
          </div>
          <div className="mt-5 bg-gray-100 min-w-full p-2 rounded-3xl flex flex-col justify-between gap-4
          lg:gap-8 text-center font-mono text-xl lg:text-3xl text-gray-700">
             <div><p>Total Active Days:15</p></div>
             <div>
              <p>Longest Streak:4</p>
             </div>
             <button className="h-10 w- w-24 bg-blue-500 rounded-lg font-serif hover:scale-105 m-auto text-xl text-white">Streak+1</button>
          </div>
          <div className="min-w-full flex justify-center mt-10 text-2xl bg-gray-100 h-64 rounded-3xl">
             rating section
          </div>
      </div>
      <div className="bg-white row-span-4 col-span-2 rounded-lg">
        <h1 className="font-bold text-wrap text-2xl md:text-3xl lg:text-5xl">Greetings Rachit <br />
        How are you feeling today!</h1>
        <div className="flex justify-between mt-5">
          <img className="w-32 lg:w-48 hover:scale-105" src={smile} alt="Happy" />
          <img className="w-32 lg:w-48 hover:scale-105" src={stressed} alt="Tensed" />
          <img className="w-32 lg:w-48 hover:scale-105" src={sad} alt=" sad" />
        </div>
        <div className="flex flex-col">
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['week 1', 'week 2', 'week 3'] }]}
      series={[{ data: [10, 13, 7] }, { data: [7, 10, 13] }, { data: [12, 15, 3] }]}
      width={500}
      height={300}
    />
    <div className="flex flex-row justify-between w-1/3 ml-10">
      <div className="bg-gray-500 text-white rounded-md p-1">Happy</div>
      <div className="bg-blue-400 text-white rounded-md p-1">Stressed </div>
      <div className="bg-blue-400 rounded-md p-1 text-white">Sad </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile