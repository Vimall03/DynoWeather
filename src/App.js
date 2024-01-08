import React, { useState, useEffect } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";
// import Weather from "./components/Weather";
import clear from "./assets/1.png";
import night from "./assets/5.png";
import rain from "./assets/rain.png";
import def from "./assets/def.png";
import c801 from "./assets/801.png"
import c802 from "./assets/802.png"
import c803 from "./assets/803.png"
import c804 from "./assets/804.png"
import atmosphere from "./assets/7xx.png"
// import snow from "./assets/snow.png"
import * as api from "./services/api"; // Import the API functions
import AutoAi from "./components/AutoAi";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  // const key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({
    main: '',
    description: '',
    id: '',
    temperature: '',
    city: '',
    country: '',
    feelsLike: '',
    minMax: '',
    humidity: '',
    pressure: '',
  });
  const [location, setLocation] = useState('chennai');
  const [theme, setTheme] = useState("light");
  const [ai, setAi] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [locationFetched, setLocationFetched] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const fetchData = async (longitude, latitude) => {
      try {
        const data = await api.fetchWeatherByCoordinates(latitude, longitude)
        setWeather(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    const successCallback = (position) => {
      setLocationFetched(true); // Set the flag to true after fetching the user's location
      const { latitude, longitude } = position.coords;
      fetchData(latitude, longitude);
    };
    const errorCallback = () => {
      const fetchData = async (city) => {
        console.log('deafault city function from errorcallback was called')
        try {
          const data = await api.fetchWeatherByCity(city);
          // Handle the data as needed
          setWeather(data);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
        }
      };
      fetchData('india,in');
    };
    if (!locationFetched) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [locationFetched]);


  useEffect(() => {
    const fetchData = async (city) => {
      console.log('deafault city function was called')
      try {
        const data = await api.fetchWeatherByCity(city);
        // Handle the data as needed
        setWeather(data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        // setAlert()
        // setTimeout(() => {
        //   setAlert('Enter City Name...')
        // }, 2000);
      }
    };
    if (search) {
      fetchData(location);
    }
    if (location === 'bangalore' || location === 'bengaluru') {
      setAi(true)
    } else {
      setAi(false)
    }
  }, [location, search]);

  const bgConst = () => {
    const style = document.body.style;
    style.backgroundRepeat = "no-repeat";
    style.backgroundSize = "cover";
    style.backgroundAttachment = "fixed";
    style.backgroundPosition = "center";
  }
  const changeBg = (image) => {
    const style = document.body.style;
    if (image === "night") {
      style.background = `url(${night})`;
      setTheme("dark");
      style.color = "white";
    } else if (image === "clear") {
      style.background = `url(${clear})`;
      setTheme("light");
      style.color = "black";
    }
    bgConst()
  };
  const autoBg = () => {
    const style = document.body.style;
    if (weather.id >= 801 && weather.id <= 804) {
      //coluds
      switch (true) {
        case (weather.id === 804):
          style.background = `url(${c804})`;
          setTheme("dark");
          style.color = "white";
          break;
        case (weather.id === 803):
          style.background = `url(${c803})`;
          setTheme("light");
          style.color = "black";
          break;
        case (weather.id === 802):
          style.background = `url(${c802})`;
          setTheme("light");
          style.color = "black";
          break;
        default:
          style.background = `url(${c801})`;
          setTheme("light");
          style.color = "black";
      }
    }
    else if (weather.id === 800) {
      if (weather.temperature > 25) {
        //sunny
        style.background = `url(${clear})`;
      }
      else {
        //clear
        style.background = `url(${def})`;
      }
      setTheme("light");
      style.color = "black";
    }
    else if (weather.id >= 500 && weather.id <= 531) {
      style.background = `url(${rain})`;
      setTheme("dark");
      style.color = "white";
    }
    else if (weather.id >= 700 && weather.id <= 781) {
      style.background = `url(${atmosphere})`;
      setTheme("dark");
      style.color = "white";
    }
    // else {
    //   style.background = `url(${snow})`;
    //   setTheme("light");
    //   style.color = "black";
    // }
    bgConst()
  }
  useEffect(() => {
    if (toggle) {
      autoBg()
    }

  }, [weather.id, toggle]);
  return (
    <div className="App">
      <Router>

        <Navbar changeBg={changeBg} theme={theme} setToggle={setToggle} autoBg={autoBg} toggle={toggle} search={setSearch} button={ai} location={setLocation} />
        <Routes>
          <Route exact path="/" element={<Temperature theme={theme} city={weather.city} country={weather.country}
          temp={weather.temperature} description={weather.description} minMax={weather.minMax} feelsLike={weather.feelsLike} 
          pressure={weather.pressure} humidity={weather.humidity}  main={weather.main} />} />
          {/* <Route exact path="/" element={} /> */}
          <Route exact path="/autoweather" element={<AutoAi />} />
          {/* <Weather theme={theme} minMax={weather.minMax} feelsLike={weather.feelsLike} pressure={weather.pressure} humidity={weather.humidity} description={weather.description} main={weather.main} /> */}
          <Route exact path="/autoweather" element={<Accordian />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
