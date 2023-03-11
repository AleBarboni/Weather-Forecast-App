// WMO Weather interpretation codes (WW)
// Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95 *	Thunderstorm: Slight or moderate
// 96, 99 *	Thunderstorm with slight and heavy hail

import ClearSky from "/src/assets/ClearSky.png";
import Cloudy from "/src/assets/cloudy.png";
import MoreCloudy from "/src/assets/more-cloudy.png";
import Clouds from "/src/assets/clouds.png";
import Fog from "/src/assets/Fog.png";
import Rain from "/src/assets/Rain.png";
import Drizzle from "/src/assets/Drizzle.png";
import Hail from "/src/assets/Hail.png";
import FreezingDrizzle from "/src/assets/Freezing-drizzle.png";
import RainShowers from "/src/assets/Rain-showers.png";
import Snow from "/src/assets/Snow.png";
import Thunderstorm from "/src/assets/Thunderstorm.png";
import ThunderstormWithHail from "/src/assets/Thunderstorm-with-hail.png";
// import clearNight from "/src/assets/clear-night.png";
// import cloudsNight from "/src/assets/clouds-night.png";


function SkyStatus ({code}) {
    if (code === 0) {
        return (<img src={ClearSky} />);
    }
    else if (code == 1) {
        return (<img src={Cloudy} />);
    }
    else if (code == 2) {
        return (<img src={MoreCloudy} />);
    }
    else if (code == 3) {
        return (<img src={Clouds} />);
    }
    else if (code == 45 || code == 48) {
        return (<img src={Fog} />);
    }
    else if (code == 51 || code == 53 || code == 55 || code == 56 || code == 57) {
        return (<img src={Drizzle} />);
    }
    else if (code == 61 || code == 63 || code == 65) {
        return (<img src={Rain} />);
    }
    else if (code == 66 || code == 67) {
        return (<img src={FreezingDrizzle} />);
    }
    else if (code == 71 || code == 73 || code == 75 || code == 85 || code == 86) {
        return (<img src={Snow} />);
    }
    else if (code == 77) {
        return (<img src={Hail} />);
    }
    else if (code == 80 || code == 81 || code == 82) {
        return (<img src={RainShowers} />);
    }
    else if (code == 95) {
        return (<img src={Thunderstorm} />);
    }
    else if (code == 96 || code == 99) {
        return (<img src={ThunderstormWithHail} />);
    }
}

export default SkyStatus;
