import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({ location }) => {
    //let location = 'manila, ph';
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({
        city: null,
        country: null,
        temp: null,
        condition: null
    })
    const getWeather = async (q) => {
        setQuery('');
        setLoading(true);
        try {
            const resAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=6758efb1ded3aab77d43ca12faefe362`);
            const resJSON = await resAPI.json();

            setWeather({
                city: resJSON.name,
                country: resJSON.sys.country,
                temp: resJSON.main.temp,
                condition: resJSON.weather[0].main
            })
        } catch (error) {
            setError(true);
        }

        setLoading(false);
    }

    function handleSearch(e) {
        e.preventDefault();

        getWeather(query);

    }

    useEffect(() => {
        getWeather(location);

    }, [location]);


    return (
        <div className='items'>
            {
                !loading && !error ? (<div>
                    <WeatherCard
                        city={weather.city}
                        country={weather.country}
                        temp={weather.temp}
                        condition={weather.condition} />
                    <form>
                        <input value={query} onChange={(e) => setQuery(e.target.value)}></input>

                        <button className='search-btn' onClick={(e) => handleSearch(e)} >Search</button>
                    </form>

                </div>) : loading ? (<div styled={{ color: 'black' }}>Loading</div>)
                        : !loading && error ? (<div style={{ color: 'black' }} >There was an error! <br />
                            <button className='reset-btn' onClick={(() => setError(false))}>Reset</button></div>) : null

            }

        </div>
    );
}

export default WeatherEngine;