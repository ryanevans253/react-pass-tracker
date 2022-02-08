import React from "react";

export default function GetWeather() {
  const key = "2563201543a0702459fa6bb75ca71c00";
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
