function HourlyWeather ({hourlyTemperature, index}) {
    
    return (
        <div>
            <div className="bg-blue-400 w-5 flex justify-center font-semibold">{Math.round(hourlyTemperature[index])}°</div>
        </div>
    )
}
export default HourlyWeather;