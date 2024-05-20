import React, { useState } from 'react'
import "../component/Weather.css"
import cloud_img from '../asset/cloud_icon.png';
import drizzel_icon from '../asset/drizzer.png';
import humidity_icon from '../asset/humidity.png';
import rain_icon from '../asset/rain.png';
import search_icon from '../asset/search icon.png';
import snow_icon from '../asset/snow.jpg';
import sunny_icon from '../asset/sunny.jpeg'
import wind_icon from '../asset/wind.png';

const Weatherapp = () => {
  let api_key = '2080e81d06bcaf55e6684cd97be0d193';

  const [wicon, setWicon] = useState(cloud_img);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    let response = await fetch(url)
    let data = await response.json()
  
  const humidity = document.getElementsByClassName("humidity-percent");
  const wind = document.getElementsByClassName("wind-rate");
  const temperature = document.getElementsByClassName("weather-temp");
  const location = document.getElementsByClassName("weather-location");

  humidity[0].innerHTML = data.main.humidity + " %";
  wind[0].innerHTML = Math.ceil(data.wind.speed) + "km/h";
  temperature[0].innerHTML = Math.ceil(data.main.temp) + "deg C";
  location[0].innerHTML = data.name;

  if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    setWicon(sunny_icon)
  }
  else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
    setWicon(cloud_img)
  }
  else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
    setWicon(drizzel_icon)
  }
  else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
    setWicon(drizzel_icon)
  }
  else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
    setWicon(rain_icon)
  }
  else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
    setWicon(rain_icon)
  }
  else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
    setWicon(snow_icon)
  }
  else {
    setWicon(sunny_icon)
  }
}


  return (
    <>
      <div className='container'>
        <div className='top-bar'>
          <input type='text' placeholder='search' className='cityInput' />
          <div className='search-icon'>
            <img src={search_icon} alt="" onClick={() => { search() }} height={"50px"} />
          </div>
        </div>
        <div className='weather-image'>
          <img src={wicon} alt='' height={"150px"} />
        </div>
        <div className='weather-temp'> 24 deg c </div>
        <div className='weather-location'>London</div>

        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" height="40px" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" height="60px" />
            <div className="data">
              <div className="wind-rate">18km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Weatherapp
