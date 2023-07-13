import React, { useState, useEffect } from "react";
import axios from "axios";


function WeatherCard({ city, onDelete }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_key = '29230438a0fe2de50da7461c174d88f8'


  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
      );
      setWeather(response.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="bg-white bg-[rgba(255,255,255,0.4)] shadow-lg rounded-lg p-4 m-4 w-64">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">{city}</h2>
        <button
          className="bg-slate-200 text-white rounded-full px-[0.5rem] font-bold"
          onClick={() => onDelete(city)}
        >
          X
        </button>
      </div>
      {loading ? (
        <p className="text-gray-500">Загрузка...</p>
      ) : error ? (
        <p className="text-red-500 font-semibold">{"Вы ввели не привильное название города, повторите попытку"}</p>
      ) : weather ? (
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold text-white">{weather.main.temp}°C</p>
          <img className="w-[3rem] h-[3rem]"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <p className="text-xl font-bold text-white">{weather.weather[0].description}</p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherCard;