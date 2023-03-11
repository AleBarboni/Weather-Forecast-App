import { useState, useEffect, useRef } from "react";
import SkyStatus from "./SkyStatus";
import EveryDayForcast from "./EveryDayForcast";

function WeatherData() {
    // location data
    // const locationRef = useRef();
    const [location, setLocation] = useState('');
    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    // curent weather
    const [temperature, setTemperature] = useState (''); 
    const [time, setTime] = useState (''); 
    const [weatherCode, setWeatherCode] = useState (''); 
    const [windDirection, setwindDirection] = useState (''); 
    const [windSpeed, setWindSpeed] = useState (''); 
    // daily data
    const [dailyrealFeelMax, setDailyRealFeelMax] = useState('');
    const [dailyRealFeelMin, setDailyRealFeelMin] = useState('');
    const [dailyPrecipitationProbability, setDailyPrecipitationProbability] = useState('');
    const [dailyPrecipitationSum, setDailyPrecipitationSum] = useState('');
    const [dailyTemperatureMax, setDailyTemperatureMax] = useState('');
    const [dailyTemperatureMin, setDailyTemperatureMin] = useState('');
    const [dateOfTheYear, setDateOfTheYear] = useState('');
    const [dailyWeathercode, setDailyWeathercode] = useState('');
    const [dailyWindspeedMax, setDailyWindspeedMax] = useState('');
    // hourly data
    const [hourlyPrecipitationProbability, setHourlyPrecipitationProbability] = useState('');
    const [humidity, setHumidity] = useState('');
    const [hourlyTemperature, setHourlyTemperature] = useState('');
    const [hourlyTime, setHourlyTime] = useState('');
    const [hourlyWeathercode, setHourlyWeathercode] = useState('');
    const [hourlyWindDirection, setHourlyWindDirection] = useState (''); 
    const [hourlyWindspeed, setHourlyWindspeed] = useState('');

    let timeOfTheDay = new Date();
    let hour = String(timeOfTheDay.getHours()).padStart(2, '0');
    let minutes = String(timeOfTheDay.getMinutes()).padStart(2, '0');
    let thisMinuteTime = `${hour}:${minutes}`

    let today = new Date();
    let weekDay = today.getDay();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //ianuarie e 0
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`; // 2023-02-21

    let inSevenDays = new Date();
    inSevenDays.setDate(inSevenDays.getDate() + 7);
    let ddOverAWeek = String(inSevenDays.getDate()).padStart(2, '0');
    let mmOverAWeek = String(inSevenDays.getMonth() + 1).padStart(2, '0'); //ianuarie e 0
    let yyyyOverAWeek = inSevenDays.getFullYear();
    inSevenDays = `${yyyyOverAWeek}-${mmOverAWeek}-${ddOverAWeek}`; // 2023-02-21
    
    const weekdaysList = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat", "Sun"];
    let day = weekdaysList[weekDay];

    //function onSearch (e) {
        // e.preventDefaunt()
        // console.log(locationRef.current.value)
    //}

    function handleOnSearch (e) {
        setLocation(e.target.value)
    }
    
    useEffect(() => {
        const fetchLocation = async () => {
            const resultLocation = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=Lugoj&count=1`) //${locationRef}
            resultLocation.json()
            .then(data => {
                setCity(data.results[0].name)
                setLat(Number(data.results[0].latitude.toFixed(2)))
                setLong(Number(data.results[0].longitude.toFixed(2)))
            })           
        }
        fetchLocation();
    }, []);

            console.log(city)
            console.log(lat)
            console.log(long)

    const URL = `https://api.open-meteo.com/v1/forecast?latitude=45.68&longitude=21.9&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=Europe%2FBerlin&start_date=${today}&end_date=${inSevenDays}`;
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json()
            .then(json => {
                // current weather
                setTemperature(json.current_weather.temperature)
                setTime(json.current_weather.time)
                setWeatherCode(json.current_weather.weathercode)
                setwindDirection(json.current_weather.winddirection)
                setWindSpeed(json.current_weather.windspeed)
                // daily data
                setDailyRealFeelMax(json.daily.apparent_temperature_max)
                setDailyRealFeelMin(json.daily.apparent_temperature_min)
                setDailyPrecipitationProbability(json.daily.precipitation_probability_max)
                setDailyPrecipitationSum(json.daily.precipitation_sum)
                setDailyTemperatureMax(json.daily.temperature_2m_max)
                setDailyTemperatureMin(json.daily.temperature_2m_min)
                setDateOfTheYear(json.daily.time)
                setDailyWeathercode(json.daily.weathercode)
                setDailyWindspeedMax(json.daily.windspeed_10m_max)
                // hourly data
                setHourlyPrecipitationProbability(json.hourly.precipitation_probability)
                setHumidity(json.hourly.relativehumidity_2m)
                setHourlyTemperature(json.hourly.temperature_2m)
                setHourlyTime(json.hourly.time)
                setHourlyWeathercode(json.hourly.weathercode)
                setHourlyWindDirection(json.hourly.winddirection_10m)
                setHourlyWindspeed(json.hourly.windspeed_10m)
            })
        }
           fetchData();
    }, []);

    function SelectCurentWeekDay (weekDay, afterXDays) {
        let nextDay = weekDay + afterXDays;
        if ((weekDay + afterXDays) > 7) { 
            nextDay = weekDay + afterXDays - 7;  
        } 
        return nextDay; 
    }
    
    return (
        <div className="px-20 pt-5 bg-gradient-to-b from-blue-400 to-yellow-300">
            <div>
                <form className="flex justify-end">
                    <input 
                        value={location}
                        type="text" 
                        className='bg-white rounded-xl px-2 mr-2 placeholder:text-center placeholder:text-black text-black'
                        placeholder='Enter city...'
                        onChange={handleOnSearch}
                    />
                    <button type="onSearch">
                        Search
                    </button>
                </form>
            </div>
            <div className="daily-weather flex w-11/12 justify-center pt-5">
                <div className="currentWeather flex">
                    <div className="weatherData flex">
                        <div className="skyData p-5">
                            <SkyStatus 
                                code={weatherCode}
                            />
                        </div>
                        <div className="temperature flex p-5">
                        <h1 className="font-bold text-5xl">{Math.round(temperature)}<sup className="font-normal text-3xl">°C</sup></h1>
                        </div>
                        <div className="OtherCurentDatas flex flex-col p-5">
                            <h1><b>Precipitation: </b>{hourlyPrecipitationProbability[0]}%</h1>
                            <h1><b>Humidity: </b>{humidity[0]}%</h1>
                            <h1><b>Wind: </b>{windSpeed} km/h</h1>
                        </div>
                    </div>
                </div>
                <div className="dayData flex flex-col p-5 ">
                    <h1 className="font-bold text-5xl pb-2">{city}</h1>
                    <p className="flex justify-end text-2xl"><b>{day}</b></p>
                    <p className="flex justify-end">{today}</p>
                    <p className="flex justify-end">{thisMinuteTime}</p>
                </div>
            </div>
            <div className="weatherInSevenDays flex justify-evenly">
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 1)]}
                    dailyWeathercode={dailyWeathercode[1]}
                    dailyTemperatureMax={dailyTemperatureMax[1]}
                    dailyTemperatureMin={dailyTemperatureMin[1]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 2)]}
                    dailyWeathercode={dailyWeathercode[2]}
                    dailyTemperatureMax={dailyTemperatureMax[2]}
                    dailyTemperatureMin={dailyTemperatureMin[2]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 3)]}
                    dailyWeathercode={dailyWeathercode[3]}
                    dailyTemperatureMax={dailyTemperatureMax[3]}
                    dailyTemperatureMin={dailyTemperatureMin[3]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 4)]}
                    dailyWeathercode={dailyWeathercode[4]}
                    dailyTemperatureMax={dailyTemperatureMax[4]}
                    dailyTemperatureMin={dailyTemperatureMin[4]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 5)]}
                    dailyWeathercode={dailyWeathercode[5]}
                    dailyTemperatureMax={dailyTemperatureMax[5]}
                    dailyTemperatureMin={dailyTemperatureMin[5]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 6)]}
                    dailyWeathercode={dailyWeathercode[6]}
                    dailyTemperatureMax={dailyTemperatureMax[6]}
                    dailyTemperatureMin={dailyTemperatureMin[6]}
                />
                <EveryDayForcast 
                    weekdaysList={weekdaysList[SelectCurentWeekDay(weekDay, 7)]}
                    dailyWeathercode={dailyWeathercode[7]}
                    dailyTemperatureMax={dailyTemperatureMax[7]}
                    dailyTemperatureMin={dailyTemperatureMin[7]}
                />
            </div>
        </div>
    )
}
export default WeatherData;