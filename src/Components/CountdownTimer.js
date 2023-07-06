import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [initialCountdown, setInitialCountdown] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timerActive) {
      intervalId = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 1) {
            setTimerActive(false); 
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerActive]);

   const handleInputChange = (event, setStateFunction) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setStateFunction(value);
    }
  };

  
  const calculateCountdown = () => {
    const totalSeconds =
      seconds + minutes * 60 + hours * 3600 + days * 86400;
    setCountdown(totalSeconds);
    setInitialCountdown(totalSeconds); 
  };

  const startTimer = () => {
    calculateCountdown();
    setTimerActive(true);
  };

 const stopTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = () => {
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setCountdown(0);
    setInitialCountdown(0);
    setTimerActive(false);
  };

  const formatCountdown = () => {
    const remainingSeconds = countdown % 60;
    const remainingMinutes = Math.floor((countdown / 60) % 60);
    const remainingHours = Math.floor((countdown / 3600) % 24);
    const remainingDays = Math.floor(countdown / 86400);

    return `${remainingDays
      .toString()
      .padStart(2, '0')} : ${remainingHours
      .toString()
      .padStart(2, '0')} : ${remainingMinutes
      .toString()
      .padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  

  return (
    <div className='text-white'id='cur'>
      <h1 class="font-bold  text-5xl ">Countdown Timer</h1>
      <br/><br/>
      <div className='flex justify-center space-x-2 text-black '>
        <label class="text-white">Days</label>
      <input
            type="number"
            value={days}
            onChange={event => handleInputChange(event, setDays)}
            placeholder="enter day"
          />
          <label class="text-white">hours</label>
       <input
            type="number"
            value={hours}
            onChange={event => handleInputChange(event, setHours)}
            placeholder="enter hrs "
          />
           <label class="text-white">minutes</label>
          <input
            type="number"
            value={minutes}
            onChange={event => handleInputChange(event, setMinutes)}
            placeholder='enter mins'
          />
           <label class="text-white">seconds</label>
          <input
            type="number"
            value={seconds}
            onChange={event => handleInputChange(event, setSeconds)}
            placeholder='enter secs'
          />
           </div>
           <br/><br/><br/>
           
           
     
           <div className='min-h-9 flex justify-center items-center  '>
        
        <div className='border-8 border-yellow-100 rounded shadow-2xl text-4xl text-white font-mono grid grid-cols-1 gap-x-px <span> '>

            <div class="relative bg-black p-8">
                <div class="absolute inset-0  grid grid-rows-2">
                    <div class="bg-gradient-to-br from-gray-800 to-black"></div>
                    <div class="bg-gradient-to-br from-gray-700 to-black"></div>
                </div>
                <span class="relative">{formatCountdown()} </span>
                <div class='absolute inset-0 flex items-center'>
                    <div class="h-px w-full bg-black"></div>
                </div>
                </div>
                </div>
                </div>
                <br/><br/>
                <div class="space-x-5">
           <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={startTimer}>Start</button>
           <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={stopTimer}>Stop</button>
           <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={resetTimer}>reset</button>
                </div>
      
    </div>
  );
};

export default CountdownTimer;
