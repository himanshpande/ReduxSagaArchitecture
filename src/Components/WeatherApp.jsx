import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAction } from "../redux/actions";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  
  const weather = useSelector((state) => state.WeatherReducer.weather);
  const loading = useSelector((state) => state.WeatherReducer.loading);
  const error = useSelector((state) => state.WeatherReducer.error);

  const getWeather = () => {
    dispatch(getWeatherAction(city));
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 text-center" style={{ width: "22rem" }}>
        <h3 className="mb-3">🌤 Weather App</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button 
          className="btn btn-primary w-100 mb-3" 
          onClick={getWeather}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        {error && <p className="text-danger">{error}</p>}

        {weather && (
          <div className="mt-3">
            <h4>{weather.name}, {weather.sys.country}</h4>
            <h1>{Math.round(weather.main.temp)}°C</h1>
            <p className="text-capitalize">
              {weather.weather[0].description}
            </p>

            <div className="d-flex justify-content-between mt-3">
              <span>💧 Humidity: {weather.main.humidity}%</span>
              <span>💨 Wind: {weather.wind.speed} m/s</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
