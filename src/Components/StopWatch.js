import React, { useState, useEffect } from 'react';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId=null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }else{
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevState)=> !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    
    <div className='text-white m-11 '>
      <h1 className="text-bold text-5xl"id="cur">StopWatch</h1>
      <br/> <br/>
      

      <div className='min-h-10 flex justify-center items-center  '>
        
        <div className='border-8 border-yellow-100 rounded shadow-2xl text-4xl text-white font-mono grid grid-cols-1 gap-x-px <span> '>

            <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{formatTime(time)}</span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>
                </div>
                </div>
                <br/>
      <div className='space-x-6'>
      <button className='bg-gray-600  px-3 py-2   text-white hover:text-black hover:bg-white' onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button className='bg-gray-6
      00  px-3 py-2  text-white hover:text-black hover:bg-white' onClick={handleReset}>Reset</button>
      </div>
     
    </div>
  );
}

export default StopWatch;
