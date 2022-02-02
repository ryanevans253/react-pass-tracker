import React from "react";

export default function GetWeather() {
  const apiCall = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`;

  const getWeather = fetch(apiCall, {})
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // setIsLoading(false);
    })

    .catch((err) => {
      console.error(err);
    });

  return null;
}
