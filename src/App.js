import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';


function App() {

  return (
    <div className='App'>
      <WeatherEngine location='manila, ph' />
      <WeatherEngine location='cavite, ph' />
      <WeatherEngine location='sipalay, ph' />
    </div>

  )

}

export default App;
