import React, { useState, useEffect } from 'react';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTriggered, setAlarmTriggered] = useState(false);
  const [selectedSound, setSelectedSound] = useState('');
  const [availableSounds] = useState([
    'discreet-492.mp3',
    'sound.mp3',
    'sound.mp3'
  ]);

  const handleInputChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const setAlarm = () => {
    setIsAlarmSet(true);
    setAlarmTriggered(false);
  };

  const cancelAlarm = () => {
    setIsAlarmSet(false);
    setAlarmTriggered(false);
  };

  const triggerAlarm = () => {
    setAlarmTriggered(true);
    playRingtone();
  };

  const playRingtone = () => {
    const audio = new Audio(selectedSound);
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {
    let timer;

    if (isAlarmSet && !alarmTriggered) {
      const now = new Date();
      const [hours, minutes] = alarmTime.split(':');
      const alarmDateTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        parseInt(hours),
        parseInt(minutes)
      );

      if (alarmDateTime <= now) {
    
        alarmDateTime.setDate(alarmDateTime.getDate() + 1);
      }

      const timeUntilAlarm = alarmDateTime - now;
      timer = setTimeout(() => {
        triggerAlarm();
      }, timeUntilAlarm);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAlarmSet, alarmTriggered, alarmTime]);

  useEffect(() => {
    if (alarmTriggered) {
      const resetAlarm = setTimeout(() => {
        cancelAlarm();
      }, 5000); 

      return () => {
        clearTimeout(resetAlarm);
      };
    }
  }, [alarmTriggered]);

  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value);
  };

  return (
    <center>
      <div className='text-white'>
        <br/><br/>
        <h2 className="text-bold text-5xl "id="cur">Alarm</h2>
        <br/><br/>
        <div>
          <input
            type="time"
            value={alarmTime}
            onChange={handleInputChange}
            disabled={isAlarmSet}
            className='text-black'
          />
          <br/><br/>
        </div>
        {!isAlarmSet && (
          <div >
            <select value={selectedSound} onChange={handleSoundChange} className='text-black'>
              {availableSounds.map((sound) => (
                <option key={sound} value={sound}>{sound}</option>
              ))}
            </select>
            <br/><br/>
            <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={setAlarm}>Set Alarm</button>
          </div>
        )}
        {isAlarmSet && !alarmTriggered && (
          <div>
            <p>Alarm set for: {alarmTime}</p>
            <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={cancelAlarm}>Cancel Alarm</button>

          </div>
        )}
        {isAlarmSet && alarmTriggered && (
                   <div>
                   <p>Alarm triggered at: {alarmTime}</p>
                   <button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'onClick={cancelAlarm}>Stop Alarm</button>
                
                 </div>
               )}
             </div>
           </center>
         );
       };
       
       export default Alarm;
       
