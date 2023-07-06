import React, { useState, useEffect } from 'react';

const Clock = ({ city, timezone }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock p-4 bg-white rounded-lg shadow-md">
      <div className="city text-lg font-semibold">{city}</div>
      <div className="time mt-2">{time}</div>
    </div>
  );
};

const WorldClock = () => {
  const [cities, setCities] = useState([
    { city: '', timezone: '' }
  ]);

  const handleAddCity = () => {
    setCities([...cities, { city: '', timezone: '' }]);
  };

  const handleCityChange = (index, field, value) => {
    const updatedCities = [...cities];
    updatedCities[index][field] = value;
    setCities(updatedCities);
  };

  const handleRemoveCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities);
  };

  const handleCitySelect = (index, value) => {
    const selectedCity = value.split('|');
    handleCityChange(index, 'city', selectedCity[0]);
    handleCityChange(index, 'timezone', selectedCity[1]);
  };

  return (
    <div className="app text-center">
        <br/><br/>
       
      <h1 className="text-3xl font-semibold mb-4 text-white " id="cur">World Clock</h1>
      <div className="clocks-container flex flex-wrap justify-center">
        {cities.map((city, index) => (
          <div key={index} className="clock-item mx-2 my-4">
            <select
              value={`${city.city}|${city.timezone}`}
              onChange={(e) => handleCitySelect(index, e.target.value)}
              className="p-2 rounded-md shadow-md"
            >
              <option value="">Select City</option>
              <option value="London|Europe/London">London</option>
              <option value="New York|America/New_York">New York</option>
              <option value="Tokyo|Asia/Tokyo">Tokyo</option>
              <option value="Sydney|Australia/Sydney">Sydney</option>
              <option value="Dubai|Asia/Dubai">Dubai</option>
              <option value="Moscow|Europe/Moscow">Moscow</option>
              <option value="Paris|Europe/Paris">Paris</option>
              <option value="Beijing|Asia/Shanghai">Beijing</option>
              <option value="Berlin|Europe/Berlin">Berlin</option>
              <option value="Rome|Europe/Rome">Rome</option>
              <option value="Toronto|America/Toronto">Toronto</option>
              <option value="São Paulo|America/Sao_Paulo">São Paulo</option>
              <option value="Singapore|Asia/Singapore">Singapore</option>
              <option value="Mumbai|Asia/Kolkata">Mumbai</option>
              
</select>
<button
onClick={() => handleRemoveCity(index)}
className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md shadow-md"
>
Remove
</button>
{city.city && city.timezone && <Clock city={city.city} timezone={city.timezone} />}
</div>
))}
</div>
<button
     onClick={handleAddCity}
     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
   >
Add City
</button>
</div>
);
};

export default WorldClock
