// Importing necessary modules and assets
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import clear from './Assets/clear.png'
import cloud from './Assets/cloud.png'
import drizzle from './Assets/drizzle.png'
import rain from './Assets/rain.png'
import snow from './Assets/snow.png'
import humidityImage from './Assets/humidity.png'
import wind from './Assets/wind.png'

// Realtime component function which takes props as input
const Realtime = ({ location, temperature, humidity, windSpeed, wcd, setWcd }) => {
    // State to manage weather icon
    let [weatherIcon, setWeatherIcon] = useState(clear)

    // useEffect hook to update weather icon based on weather condition code (wcd)
    useEffect(() => {
        // Checking weather condition code and setting appropriate weather icon
        if (wcd === "10000" || wcd === "10001") {
            setWeatherIcon(clear)
        } else if (wcd === "11020" || wcd === "11021") {
            setWeatherIcon(cloud)
        } else if (wcd === "40000" || wcd === "40001") {
            setWeatherIcon(drizzle)
        } else if (wcd === "40010" || wcd === "40011") {
            setWeatherIcon(rain)
        } else if (wcd === "50000" || wcd === "50001") {
            setWeatherIcon(snow)
        } else {
            setWeatherIcon(cloud) // Default to cloud icon if weather condition is not recognized
        }
    }, []) // Empty dependency array means this effect runs once after the component mounts

    return (
        <div className=' flex justify-center flex-wrap'>
            {/* Weather display section */}
            <div className='h-[600px] w-[500px] flex justify-center items-center flex-col '>
                <img src={weatherIcon} alt="" className=' h-[300px] w-[300px] relative bottom-[-50px]' />
                <div className=' h-[150px] w-[700px]  flex justify-center items-center flex-wrap'>
                    <h1 className=' text-white text-[70px]'>{temperature}°c</h1> {/* Display temperature */}
                </div>
                <div className=' h-[200px] w-[300px]   flex justify-center items-center flex-wrap ml-[20px]'>
                    <h1 className=' text-white text-[30px]'>{location}</h1> {/* Display location */}
                </div>
            </div>

            {/* Additional weather details section */}
            <div className=' flex flex-col justify-center items-center gap-[100px] mt-[40px]'>
                {/* Humidity */}
                <div className=' flex justify-center items-center gap-[20px]'>
                    <img src={humidityImage} alt="" className=' object-cover h-[50px] w-[50px]' />
                    <div>
                        <h1 className=' text-white font-bold text-[25px]'>{humidity}</h1> {/* Display humidity */}
                        <h1 className=' text-white font-bold text-[25px]'>Humidity</h1>
                    </div>
                </div>

                {/* Wind Speed */}
                <div className=' flex justify-center items-center gap-[20px]'>
                    <img src={wind} alt="" className=' object-cover h-[50px] w-[50px]' />
                    <div>
                        <h1 className=' text-white font-bold text-[25px]'>{windSpeed}km/h</h1> {/* Display wind speed */}
                        <h1 className=' text-white font-bold text-[25px]'>Wind Speed</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realtime
