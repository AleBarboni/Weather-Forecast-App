import SkyStatus from "./SkyStatus";

function EveryDayForcast ({weekdaysList, dailyWeathercode, dailyTemperatureMax, dailyTemperatureMin}) {
    return ( 
        <div className="eachDay mx-2 my-5 p-2 rounded-3xl drop-shadow-lg shadow-lg shadow-blue-400/50">
            <div>
                <h1 className="font-bold flex justify-center pb-2 text-2xl">{weekdaysList}</h1>
                <SkyStatus 
                    code={dailyWeathercode}
                />
            </div>
            <div className="minAndMaxTemp flex justify-evenly">
                <h1 className="font-bold flex justify-center pb-2 text-2xl p-3">{Math.round(dailyTemperatureMax)}°</h1>
                <h1 className="font-bold flex justify-center pb-2 text-2xl p-3">{Math.round(dailyTemperatureMin)}°</h1>
            </div>
        </div>
    );
}

export default EveryDayForcast;