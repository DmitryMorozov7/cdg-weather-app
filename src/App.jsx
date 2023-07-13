import React, { useState } from "react";
import WeatherList from "./components/WeatherList";
import WeatherForm from "./components/WeatherForm";

// Главный компонент приложения
function App() {
  const [cities, setCities] = useState(["Москва", "Лондон", "Париж"]);

  // Функция для добавления нового города в список закладок
  const addCity = (city) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
    }
  };

  // Функция для удаления города из списка закладок
  const deleteCity = (city) => {
    setCities(cities.filter((c) => c !== city));
  };

  // Возвращаем JSX-разметку для отображения компонента
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center p-4 text-white">Weather APP</h1>
      <WeatherForm onSubmit={addCity} />
      <WeatherList cities={cities} onDelete={deleteCity} />
    </div>
  );
}

export default App;