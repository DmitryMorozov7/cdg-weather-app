import React, { useState } from "react";
import WeatherList from "./components/WeatherList";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [cities, setCities] = useState(["Москва", "Лондон", "Париж"]);

  const addCity = (city) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
    }
  };

  const deleteCity = (city) => {
    setCities(cities.filter((c) => c !== city));
  };

  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center p-4 text-white">Weather APP</h1>
      <WeatherForm onSubmit={addCity} />
      <WeatherList cities={cities} onDelete={deleteCity} />
    </div>
  );
}

export default App;