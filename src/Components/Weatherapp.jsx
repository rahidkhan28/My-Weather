import axios from 'axios';
import React, { useEffect, useState } from 'react';
import clear from './Assets/clear.png';
import humidityImage from './Assets/humidity.png';
import wind from './Assets/wind.png';
import Nav from './Nav';
import Forecast from './Forecast';
import Realtime from './Realtime';

const Weatherapp = () => {
    let [search, setSearch] = useState("");
    let [location, setLocation] = useState("Enter place to search");
    let [temperature, setTemperature] = useState(0);
    let [humidity, setHumidity] = useState(0);
    let [windSpeed, setWindSpeed] = useState(0);
    let [showRealtime, setShowRealtime] = useState(true);

    // Loading states for Realtime and Forecast components
    let [realtimeLoading, setRealtimeLoading] = useState(false);
    let [forecastLoading, setForecastLoading] = useState(false);

    //------------------------------------------------------------------

    let [foreCast,setForeCast] = useState([]);
    let [name,setName] = useState("");
    let [wcd,setWcd] = useState(0);

    let [post,setPost] = useState(null);

    let getWeather = () => {
        setRealtimeLoading(true); // Set loading state for Realtime component
        setForecastLoading(true); // Set loading state for Forecast component

        axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${search}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`)
            .then((response) => {
                console.log(response.data.data);
                setWindSpeed(response.data.data.values.windSpeed);
                setHumidity(response.data.data.values.humidity);
                setTemperature(response.data.data.values.temperature);
                setLocation(response.data.location.name);
                setWcd(response.data.data.values.weatherCode);
                setRealtimeLoading(false); // Update loading state for Realtime component
            })
            .catch((err) => { console.log("Errorrr"); });

        axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${search}&apikey=2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU`)
        .then((response)=>{
            setName(response.data.location.name);
            setForeCast(response.data.timelines.daily);
            setForecastLoading(false); // Update loading state for Forecast component
        })
        .catch((error)=>{console.log("Error");})
    }

    return (
        <div className=' flex justify-center flex-col h-[100%] w-[100%] items-center bg-gradient-to-r from-violet-600 to-indigo-600 pb-[50px] pb-[600px]'>
            <div className='  h-[100vh] w-[80%] flex flex-col items-center'>

                <div className=' w-[80%] h-[100px] flex justify-center items-center gap-5 mt-[20px]'>
                    <input type="text" placeholder='Search' className=' w-[60%] h-[50px] rounded-[100px] p-5' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <button className=' h-[50px] w-[80px] bg-white text-black rounded-[100px]' onClick={getWeather}>Search</button>
                </div>

                <div className=' h-[80px] w-[80%] mt-[20px]'>
                    <Nav showRealtime={showRealtime} setShowRealtime={setShowRealtime}/>
                </div>

                <div className=' h-[100%] w-[100%] pb-[50px] flex justify-center gap-[100px]  mt-[50px] bg-gray-700 bg-opacity-50 rounded-[20px]'>
                    {/* Conditional rendering based on loading states */}
                    {realtimeLoading || forecastLoading ? (
                        <div><div role="status">
                        <svg aria-hidden="true" className="w-[70px] h-[70px] mt-[300px] text-gray-200 animate-spin dark:text-black-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div></div>
                    ) : (
                        showRealtime ? <Realtime location={location} temperature={temperature} humidity={humidity} windSpeed={windSpeed} wcd={wcd} setWcd={setWcd}/> : <Forecast name={name} foreCast={foreCast}/>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Weatherapp;
