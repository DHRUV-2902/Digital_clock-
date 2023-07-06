import logo from './logo.svg';
import './App.css';
import DigClock from './Components/DigClock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StopWatch from './Components/StopWatch';
import Alarm from './Components/Alarm';
import CountdownTimer from './Components/CountdownTimer';
import WorldClock from './Components/WorldClock';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<DigClock/>}/>
        <Route path='/sw' element={<StopWatch/>}/>
        <Route path='/a' element={<Alarm/>}/>
        <Route path='/c' element={<CountdownTimer/>}/>
        <Route path='/w' element={<WorldClock/>}/>
        
      </Routes>
      </BrowserRouter>

     
    
    </div>
  );
}

export default App;
