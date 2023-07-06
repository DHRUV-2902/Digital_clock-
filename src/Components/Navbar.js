import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className='text-white'>
        <ul  className='flex justify-center space-x-6'>
            <li><button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'><Link to="/">Home </Link></button></li>
            <li><button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'><Link to="/sw">StopWatch </Link> </button></li>
            <li><button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'><Link to="/a"> Alarm </Link></button></li>
            <li><button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'><Link to="/w">World clock </Link></button></li>
            <li><button className='bg-gray-900  px-3 py-2 rounded-2xl  text-white hover:text-black hover:bg-white'><Link to="/c"> CountDown</Link></button></li>
        </ul>
      </div>
    </div>
  )
}
