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

const endGame = (e) => {
  e.preventDefault();
  if (confirm("Are you sure you want to end your current game?") == true) {
    document.querySelector(".start-screen").style.display = "block";
    document.querySelector(".game-canvas").style.display = "none";
    questionNumber = 1;
    gameScore = 0;
    document.querySelector(".answer-log").innerText = ``;
    document.querySelector(".answer-log").style.padding = "0px";
  }
};

const finishGame = (e) => {
  e.preventDefault();
  document.querySelector(".start-screen").style.display = "block";
  document.querySelector(".game-canvas").style.display = "none";
  document.querySelector(".end-screen").style.display = "none";
  questionNumber = 1;
  gameScore = 0;
  document.querySelector(".answer-log").innerText = ``;
  document.querySelector(".answer-log").style.padding = "0px";
};

const checkCountry = (e) => {
  const selectedTile = e.target.className;
  return selectedTile;
};

document
  .querySelector(".start-menu-button")
  .addEventListener("click", startGame);

document
  .querySelector(".return-menu-button")
  .addEventListener("click", endGame);

document
  .querySelector(".game-score-button")
  .addEventListener("click", finishGame);
