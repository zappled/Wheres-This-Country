"use strict";

// array of European cities to be used to generate questions
const cityList = [];
const splicedCities = [];

// Identify and set the correct grid coordinates for each selected city
const cityGrid = (cityName, grid) => {
  cityList.push(cityName);
  const city = grid;
  for (let i = 0; i < city.length; i++) {
    const j = city[i];
    const citySq = document.querySelectorAll(".map-button-europe")[j];
    // city is added into the corresponding button's class name
    // used to check for answers during the game
    citySq.classList.add(cityName);
  }
};

const createSquareEurope = () => {
  const button = document.createElement("button");
  button.className = "map-button-europe";
  document.querySelector(".game-grid-europe").append(button);
};

const generateSquareEurope = (numberOfSquares) => {
  for (let i = 1; i <= numberOfSquares; i++) {
    createSquareEurope();
  }
};

generateSquareEurope(1080);

// European Cities
cityGrid("Tromso", [66]);
cityGrid("Reykjavik", [277]);
cityGrid("Oslo", [423]);
cityGrid("Stockholm", [470]);
cityGrid("Helsinki", [428]);
cityGrid("Tallinn", [473]);
cityGrid("Vilnius", [608]);
cityGrid("Minsk", [609]);
cityGrid("St-Petersburg", [430]);
cityGrid("Belfast", [597]);
cityGrid("Kaliningrad", [606, 607]);
cityGrid("Glasgow", [553]);
cityGrid("Edinburgh", [553]);
cityGrid("Copenhagen", [558, 559]);
cityGrid("Gothenburg", [513, 514]);
cityGrid("Malmo", [559]);
cityGrid("Berlin", [649]);
cityGrid("Warsaw", [651]);
cityGrid("Prague", [694, 739]);
cityGrid("Vienna", [740, 785]);
cityGrid("Budapest", [786]);
cityGrid("Dublin", [642]);
cityGrid("Amsterdam", [646]);
cityGrid("Brussels", [691]);
cityGrid("Manchester", [643, 644]);
cityGrid("Liverpool", [643, 644]);
cityGrid("Bilbao", [868]);
cityGrid("Madrid", [913]);
cityGrid("Lisbon", [956]);
cityGrid("Athens", [967, 968]);
cityGrid("Valletta", [1009]);
cityGrid("Barcelona", [915]);
cityGrid("Naples", [919]);
cityGrid("Marseille", [871]);
cityGrid("Florence", [873]);
cityGrid("Sofia", [877, 878]);
cityGrid("Tbilisi", [885, 930]);
cityGrid("Milan", [828]);
cityGrid("Bordeaux", [824]);
cityGrid("Munich", [738, 783]);
cityGrid("Zurich", [782, 783]);
cityGrid("Venice", [829]);
cityGrid("Zagreb", [830]);
cityGrid("Bucharest", [833, 878]);
cityGrid("London", [644, 689]);
cityGrid("Paris", [735]);
cityGrid("Luxembourg", [736, 737]);
cityGrid("Kyiv", [700]);
cityGrid("Odesa", [790]);
cityGrid("Istanbul", [924]);
cityGrid("Skopje", [922]);
