"use strict";

// array of European cities to be used to generate questions
const cityList = [];
const splicedCities = [];

// Identify and set the correct grid coordinates for each selected country
const cityGrid = (cityName, grid) => {
  cityList.push(cityName);
  const city = grid;
  for (let i = 0; i < city.length; i++) {
    const j = city[i];
    const citySq = document.querySelectorAll(".map-button")[j];
    // country is added into the corresponding button's class name
    // used to check for answers during the game
    citySq.classList.add(cityName);
  }
};
