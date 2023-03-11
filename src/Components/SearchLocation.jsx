import { useEffect, useState } from 'react';

function SearchLocation () {
    const [city, setCity] = useState('');
    //const [location, setLocation] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    function HandleOnSearch (e) {
        setCity(e.target.value)
    }

    useEffect(() => {
        const fetchLocation = async () => {
            const resultLocation = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
            resultLocation.json()
            .then(json => {
                console.log(json)
                setLat(json.results[0].latitude)
                setLong(json.results[0].longitude)
            })           
        }
        fetchLocation();
    }, []);
            
    // const URLLocation = `https://geocoding-api.open-meteo.com/v1/search?name=${HandleOnSearch}&count=1`;
    

                console.log(city)
                console.log(lat)
                console.log(long)
                const latitude = Number.lat;
                const longitude =Number.long;
                
                console.log(latitude);
                console.log(longitude)
              

    return (
        <div>
            <input 
                value={city}
                type="text" 
                className='bg-blue-400 text-black text-xl'
                placeholder='Search city...'
                onChange={HandleOnSearch}
            />
            <button
                //onClick={}
                >
                Search
            </button>
        </div>
        
    )
    
}

export default SearchLocation;