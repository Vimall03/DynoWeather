// api.js
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '0164e9b8665ed40efa1882a07cfd3b7c';

export const handleData = (parsedData, coordinates) => {
    return {
        main: parsedData.weather[0].main,
        description: parsedData.weather[0].description,
        id: parsedData.weather[0].id,
        temperature: Math.round(parsedData.main.temp), // Convert temperature from Kelvin to Celsius
        city: coordinates ? 'Current Location' : parsedData.name,
        country: parsedData.sys.country,
        feelsLike: parsedData.main.feels_like.toFixed(1),
        minMax: parsedData.main.temp_min.toFixed(1)===parsedData.main.temp_max.toFixed(1)? parsedData.main.temp_max.toFixed(1): parsedData.main.temp_min.toFixed(1) + '/' + parsedData.main.temp_max.toFixed(1),
        humidity: parsedData.main.humidity,
        pressure: parsedData.main.pressure
    };
};


export const fetchWeatherByCity = async (city) => {
    try {
        const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log('fetchWeatherByCity was called')
        return handleData(parsedData, false);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for handling in the component if needed
    }
};
export const fetchWeatherByCoordinates = async (longitude, latitude) => {
    try {
        const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log('fetchWeatherByCoordinates was called')
        return handleData(parsedData, true);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for handling in the component if needed
    }
};
