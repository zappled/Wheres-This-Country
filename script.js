"use strict";

const createSquare = () => {
  const button = document.createElement("button");
  button.className = "map-button";
  document.querySelector(".game-grid").append(button);
};

const generateSquare = (numberOfSquares) => {
  for (let i = 1; i <= numberOfSquares; i++) {
    createSquare();
  }
};

generateSquare(1080);

const startGame = (e) => {
  e.preventDefault();
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".game-canvas").style.display = "block";
  randomizeCountry();
};

const startGameEurope = (e) => {
  e.preventDefault();
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".game-canvas-europe").style.display = "block";
  randomizeCountry();
};

const endGame = (e) => {
  e.preventDefault();
  const confirmBox = document.querySelector(".confirm-box");
  confirmBox.style.display = "block";
  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");
  yesButton.addEventListener("click", function () {
    location.reload();
  });
  noButton.addEventListener("click", function () {
    confirmBox.style.display = "none";
  });
};

const finishGame = (e) => {
  e.preventDefault();
  location.reload();
};

const checkCountry = (e) => {
  const selectedTile = e.target.className;
  return selectedTile;
};

document
  .querySelector(".start-menu-button")
  .addEventListener("click", startGame);

document
  .querySelector(".start-button-europe")
  .addEventListener("click", startGameEurope);

document
  .querySelector(".return-menu-button")
  .addEventListener("click", endGame);

document
  .querySelector(".game-score-button")
  .addEventListener("click", finishGame);
