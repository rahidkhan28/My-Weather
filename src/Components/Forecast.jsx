// Importing necessary modules and assets
import axios from 'axios'; // For making HTTP requests
import React from 'react'; // For building UI components
import clear from './Assets/clear.png'; // Image asset for clear weather condition
import cloud from './Assets/cloud.png'; // Image asset for cloudy weather condition

// Define the Forecast component
const Forecast = ({ name, foreCast }) => {
  // Destructure props to extract 'name' and 'foreCast' from props

  // Define a function to get the name of the day of the week from a given date
  function getDayOfWeek(dateString) {
    // Create a new Date object using the dateString
    var date = new Date(dateString);
    
    // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    var dayOfWeek = date.getDay();
    
    // Define an array to map the day of the week number to its name
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Return the name of the day of the week
    return days[dayOfWeek];
  }

  // Return the JSX representing the component's UI
  return (
    <div>
      {/* Render the city name */}
      <div className='w-full h-[100px] flex justify-center items-center'>
        <h1 className='text-white font-bold text-3xl'>{name}</h1>
      </div>

      {/* Render the weather forecast cards */}
      <div className='flex flex-wrap justify-center mt-10 gap-5'>
        {/* Map through each forecast data and render a card for each */}
        {foreCast.map((data, index) => {
          // Extract the date from the forecast data
          let date = data.time;
          // Get the name of the day of the week for the given date
          let dayOfWeek = getDayOfWeek(date);

          // Return the JSX for the forecast card
          return (
            <div key={index} className='h-[350px] w-[220px] bg-blue-950 flex flex-col justify-center items-center rounded-[20px] gap-[25px]'>
              {/* Render the weather condition image */}
              <img src={cloud} alt="" className='h-[150px] w-[150px]'/>
              <div className='flex flex-col justify-center items-center'>
                {/* Render the temperature */}
                <h1 className='text-white text-4xl'>{data.values.temperatureAvg}°c</h1>
                {/* Render the date */}
                <h1 className='text-white text-xl'>{data.time}</h1>
                {/* Render the day of the week */}
                <h1 className='text-white text-xl'>{dayOfWeek}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export the Forecast component
export default Forecast;
