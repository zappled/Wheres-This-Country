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

// generates the game grid for the European cities version

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

//////
// controls sequence of events during gameplay
const randomizeCity = () => {
  // inputs the game score at the start of the round
  document.querySelector(
    ".game-score-europe"
  ).innerText = `Current score: ${gameScore}`;
  // selects random city from array of 50 European cities
  const randomIndex = Math.floor(Math.random() * cityList.length);
  const random = cityList[randomIndex];
  // selected city is spliced so it will not be repeated
  // spliced city is pushed into a new array
  splicedCities.push(cityList.splice(randomIndex, 1).toString());
  const questionSelect = random.replaceAll("-", " ");
  // updates question with the selected city name
  document.querySelector(
    ".question-title-europe"
  ).innerText = `Where is ${questionSelect}?`;
  // updates with the current question number
  document.querySelector(
    ".question-number-europe"
  ).innerText = `Question ${questionNumber}/10`;
  // on click, checks if answer matches the selected city
  document
    .querySelector(".game-grid-europe")
    .addEventListener("click", function (e) {
      // function checks the clicked tile for its class name
      const selectedTile = e.target.className;
      // code runs if class name of clicked tile includes the name of the selected city
      // increases game score & question number by 1
      // highlights correct tiles in blue for 3 seconds
      const answer = document.getElementsByClassName(random);
      if (selectedTile.includes(random)) {
        for (let i = 0; i < answer.length; i++) {
          answer[i].style.backgroundColor = "rgb(25, 86, 166)";
          answer[i].style.opacity = "0.5";
          window.setTimeout(function () {
            answer[i].style.backgroundColor = "";
            answer[i].style.opacity = "";
          }, 3000);
        }
        document.querySelector(
          ".answer-log-europe"
        ).innerText = `Correct answer!`;
        document.querySelector(".answer-log-europe").style.padding = "10px";
        gameScore++;
        document.querySelector(
          ".game-score-europe"
        ).innerText = `Current score: ${gameScore}`;
        questionNumber++;
        document.querySelector(
          ".question-number-europe"
        ).innerText = `Question ${questionNumber}/10`;
        // code runs if class name of clicked tile does not include the name of the selected city
        // increases question number by 1
        // highlights correct tiles in red for 3 seconds
      } else {
        for (let i = 0; i < answer.length; i++) {
          answer[i].style.backgroundColor = "red";
          answer[i].style.opacity = "0.5";
          window.setTimeout(function () {
            answer[i].style.backgroundColor = "";
            answer[i].style.opacity = "";
          }, 3000);
        }
        document.querySelector(
          ".answer-log-europe"
        ).innerText = `Wrong answer!`;
        document.querySelector(".answer-log-europe").style.padding = "10px";
        questionNumber++;
        document.querySelector(
          ".question-number-europe"
        ).innerText = `Question ${questionNumber}/10`;
      }
      // removes event listener from .game-grid element before running function again
      document
        .querySelector(".game-grid-europe")
        .replaceWith(
          document.querySelector(".game-grid-europe").cloneNode(true)
        );
      // function repeats as long as questionNumber value is less than or equal to 10
      if (questionNumber <= 10) {
        randomizeCity();
      } else if (questionNumber > 10) {
        // removes event listeners, correct answer is still highlighted for 3 seconds
        document.querySelector(
          ".question-number-europe"
        ).innerText = `Question ${questionNumber - 1}/10`;
        document.querySelector(".question-title-europe").innerText = ``;
        document
          .querySelector(".game-grid-europe")
          .replaceWith(
            document.querySelector(".game-grid-europe").cloneNode(true)
          );
        // after 3 seconds, game brings up the end-game screen
        window.setTimeout(function () {
          document.querySelector(".game-canvas-europe").style.display = "none";
          document.querySelector(".end-screen").style.display = "block";
          // updates and shows the final score & result
          document.querySelector(
            ".score-log"
          ).innerText = `Your score is ${gameScore}/10`;
          if (gameScore >= 8) {
            document.querySelector(
              ".result"
            ).innerText = `You're a high-flier!`;
          } else if (gameScore >= 5) {
            document.querySelector(
              ".result"
            ).innerText = `Passed with flying colours!`;
          } else if (gameScore >= 2) {
            document.querySelector(
              ".result"
            ).innerText = `Good effort, try again!`;
          } else {
            document.querySelector(
              ".result"
            ).innerText = `Oops, better luck next time!`;
          }
          // resets question number and game score at end of game
          questionNumber = 1;
          gameScore = 0;
          // spliced cities is added back into cityList array
          // allows next round to be played with the full array of 50 cities again
          cityList.push(...splicedCities);
          // resets splicedCities back to an empty array
          splicedCities.length = 0;
        }, 3000);
      }
    });
};
