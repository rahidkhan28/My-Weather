import React from 'react';

// Define a functional component named Nav which takes props: showRealtime, setShowRealtime
const Nav = ({ showRealtime, setShowRealtime }) => {
  return (
    // JSX representing the navigation bar
    <nav className='flex h-[80px] w-[100%] justify-around items-center flex-wrap text-white gap-3'>
      {/* Button to toggle to real-time weather view */}
      <button onClick={() => { setShowRealtime(true) }} className='bg-blue-950 p-[10px] rounded-[100px] hover:bg-blue-900'>
        Real-Time Weather
      </button>
      {/* Button to toggle to forecasted weather view */}
      <button onClick={() => { setShowRealtime(false) }} className='bg-blue-950 p-[10px] rounded-[100px] hover:bg-blue-900'>
        Forecasted Weather
      </button>
    </nav>
  );
}

// Export the Nav component
export default Nav;
