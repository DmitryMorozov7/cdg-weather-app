import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherList({ cities, onDelete }) {
  return (
    <div className="flex flex-wrap justify-center">
      {cities.map((city) => (
        <WeatherCard key={city} city={city} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default WeatherList;