import React, { useState } from "react";

function WeatherForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <form className="flex justify-center p-4 " onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите название города"
        className="border bg-[rgba(255,255,255,0.1)] placeholder-white border-gray-300 rounded-l-lg p-2 w-64 text-white outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-lg p-2 font-bold"
      >
        Добавить
      </button>
    </form>
  );
}

export default WeatherForm;