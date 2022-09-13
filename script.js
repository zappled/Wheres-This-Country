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
  randomizeCity();
};

const showInstructions = (e) => {
  e.preventDefault();
  const instructionBox = document.querySelector(".instructions-box");
  const instructionButton = document.querySelector(".instructions");
  if (instructionBox.style.display === "none") {
    instructionBox.style.display = "block";
    instructionButton.style.borderRadius = "10px 10px 0px 0px";
    instructionButton.style.borderBottom = "2px solid transparent";
  } else {
    instructionBox.style.display = "none";
    instructionButton.style.borderRadius = "10px";
    instructionButton.style.borderBottom = "2px solid rgb(25, 86, 166)";
  }
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

const endGameEurope = (e) => {
  e.preventDefault();
  const confirmBox = document.querySelectorAll(".confirm-box")[1];
  confirmBox.style.display = "block";
  const yesButton = document.querySelectorAll(".yes-button")[1];
  const noButton = document.querySelectorAll(".no-button")[1];
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
  .querySelector(".instructions")
  .addEventListener("click", showInstructions);

document
  .querySelector(".return-menu-button")
  .addEventListener("click", endGame);

document
  .querySelectorAll(".return-menu-button")[1]
  .addEventListener("click", endGameEurope);

document
  .querySelector(".game-score-button")
  .addEventListener("click", finishGame);
