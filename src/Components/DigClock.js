import React, { useEffect, useState } from 'react'

export default function DigClock() {
    const[hour,setHour]=useState(0);
    const[min,setMin]=useState(0);
    const[sec,SetSec]=useState(0);
    const[pm,setPm]=useState(true);
    const[ans,setAns]=useState(0);

    useEffect(()=>{
        setInterval(()=>{
            let h = new Date().getHours();
            let m = new Date().getMinutes();
             let s = new Date().getSeconds();

            if(h>=12){
                setPm(true);
                h=h-12;
                setAns("pm");

            }else{
                setPm(false);
                setAns("am");
            }
            h=h?h:12;
            setHour(h);
            setMin(m); 
            SetSec(s);
        },1000);
    },[])
      return (
    
    <div className="m-11 justify-center items-center min-h-screen "> 
    <h1 id="tag"className=" font-bold text-5xl text-white "> DIGITAL CLOCK </h1>
    <br/><br/>
      <div className='min-h-9 flex justify-center items-center  '>
        
        <div className='border-8 border-yellow-100 rounded shadow-2xl text-4xl text-white font-mono grid grid-cols-4 gap-x-px <span> '>

            <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{hour} hrs</span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>

                

                <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{min} mins</span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>



                <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{sec} secs</span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>

                <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{ans}</span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>
               



        </div>
 
      </div>
      </div>
  
  )
}
