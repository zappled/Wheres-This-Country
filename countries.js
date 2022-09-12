"use strict";

// array of countries to be used to generate questions
const countryList = [];

// Identify and set the correct grid for each selected country
const countryGrid = (countryName, grid) => {
  countryList.push(countryName);
  const country = grid;
  for (let i = 0; i < country.length; i++) {
    const j = country[i];
    const countrySq = document.querySelectorAll(".map-button")[j];
    countrySq.classList.add(countryName);
  }
};

// European Countries
countryGrid("Estonia", [204]);
countryGrid("Portugal", [335]);
countryGrid("Spain", [290, 291, 335, 336]);
countryGrid("Germany", [247, 248]);
countryGrid("Sweden", [158, 203]);
countryGrid("Iceland", [154]);
countryGrid("United-Kingdom", [201, 245, 246]);
countryGrid("Finland", [114, 159]);
countryGrid("Italy", [292, 293, 338]);
countryGrid("Romania", [294]);

// African Countries
countryGrid("Madagascar", [747, 748, 792]);
countryGrid("South-Africa", [790, 833, 834, 835, 878, 879, 880]);
countryGrid("Angola", [698, 699, 743, 744]);
countryGrid("Morocco", [380, 381, 424, 425]);
countryGrid("Kenya", [611, 656]);
countryGrid("Mali", [470, 471, 514, 515, 516, 560]);
countryGrid("Zimbabwe", [745, 790]);
countryGrid("Cameroon", [563, 607, 608]);
countryGrid("Tunisia", [382]);
countryGrid("Tanzania", [655, 656, 700, 701]);

// Middle-Eastern Countries
countryGrid("Yemen", [478, 522, 523]);
countryGrid("Saudi-Arabia", [386, 431, 432, 433, 476, 477, 478]);
countryGrid("Kuwait", [432]);
countryGrid("Iraq", [386, 387]);
countryGrid("United-Arab-Emirates", [478]);

// Asian Countries
countryGrid(
  "Indonesia",
  [619, 620, 622, 623, 665, 666, 667, 668, 669, 670, 711, 712, 713, 715]
);
countryGrid("Singapore", [620]);
countryGrid("Bangladesh", [438, 483]);
countryGrid("Kazakhstan", [252, 253, 254, 255, 256, 297, 298, 299, 300, 301]);
countryGrid("Japan", [309, 354, 398, 399]);
countryGrid("India", [391, 436, 437, 438, 480, 481, 482, 483, 526, 527, 572]);
countryGrid("Pakistan", [390, 391, 434, 435]);
countryGrid("Cambodia", [530, 531]);
countryGrid("Philippines", [533, 578]);
countryGrid("Tajikistan", [345, 346]);

//Oceania Countries
countryGrid("Solomon-Islands", [673, 718]);
countryGrid("New-Zealand", [899, 943, 944, 987, 988]);
countryGrid(
  "Australia",
  [
    758, 759, 760, 761, 802, 803, 804, 805, 806, 847, 848, 849, 850, 851, 852,
    891, 892, 893, 894, 895, 896, 939, 940, 985,
  ]
);
countryGrid("Fiji", [764]);
countryGrid("New-Caledonia", [809]);

// North & Central American Countries
countryGrid(
  "United-States-of-America",
  [
    94, 95, 96, 138, 139, 140, 182, 183, 184, 275, 276, 277, 278, 279, 280, 281,
    282, 320, 321, 322, 323, 324, 325, 326, 365, 366, 367, 368, 369, 370, 371,
    412, 413, 415,
  ]
);
countryGrid("Mexico", [366, 411, 412, 457, 458, 459, 502, 503]);
countryGrid("Cuba", [460]);
countryGrid("Costa-Rica", [549]);
countryGrid("Panama", [549, 550]);
countryGrid("Jamaica", [460]);
countryGrid("Haiti", [461]);
countryGrid("Dominican-Republic", [461]);
countryGrid("Guatemala", [503]);
countryGrid("Honduras", [504]);

// South American Countries
countryGrid("Chile", [776, 777, 821, 866, 867, 911, 912, 957, 1002]);
countryGrid("Uruguay", [868, 869]);
countryGrid(
  "Argentina",
  [777, 822, 823, 866, 867, 868, 912, 913, 957, 958, 1003]
);
countryGrid("Ecuador", [595, 640]);
countryGrid("Bolivia", [687, 731, 732, 733, 777]);
countryGrid("Paraguay", [777, 778, 823]);
countryGrid("Venezuela", [551, 552, 597]);
countryGrid("Suriname", [598]);
countryGrid(
  "Brazil",
  [
    641, 642, 643, 644, 645, 685, 686, 687, 688, 689, 690, 691, 732, 733, 734,
    735, 778, 779, 780, 823, 824, 825, 868, 869,
  ]
);
countryGrid("Colombia", [550, 595, 596, 640, 641]);

// controls sequence of events during gameplay

let questionNumber = 1;
let gameScore = 0;

const randomizeCountry = () => {
  document.querySelector(
    ".game-score"
  ).innerText = `Current score: ${gameScore}`;
  const randomIndex = Math.floor(Math.random() * countryList.length);
  const random = countryList[randomIndex];
  countryList.splice(randomIndex, 1);
  const questionSelect = random.replaceAll("-", " ");
  document.querySelector(
    ".question-title"
  ).innerText = `Where is ${questionSelect}?`;
  document.querySelector(
    ".question-number"
  ).innerText = `Question ${questionNumber}/10`;
  document.querySelector(".game-grid").addEventListener("click", function (e) {
    const selectedTile = e.target.className;
    if (selectedTile.includes(random)) {
      document.querySelector(".answer-log").innerText = `Correct answer!`;
      document.querySelector(".answer-log").style.padding = "10px";
      gameScore++;
      document.querySelector(
        ".game-score"
      ).innerText = `Current score: ${gameScore}/10`;
      questionNumber++;
      document.querySelector(
        ".question-number"
      ).innerText = `Question ${questionNumber}/10`;
    } else {
      document.querySelector(".answer-log").innerText = `Wrong answer!`;
      document.querySelector(".answer-log").style.padding = "10px";
      questionNumber++;
      document.querySelector(
        ".question-number"
      ).innerText = `Question ${questionNumber}/10`;
      console.log(countryList);
    }
    // removes event listener from .game-grid element before running function again
    document
      .querySelector(".game-grid")
      .replaceWith(document.querySelector(".game-grid").cloneNode(true));
    if (questionNumber <= 10) {
      randomizeCountry();
    } else if (questionNumber > 10) {
      document.querySelector(".game-canvas").style.display = "none";
      document.querySelector(".end-screen").style.display = "block";
      document.querySelector(
        ".score-log"
      ).innerText = `Your score is ${gameScore}/10`;
      if (gameScore >= 8) {
        document.querySelector(".result").innerText = `Excellent!`;
      } else if (gameScore >= 5) {
        document.querySelector(".result").innerText = `Good job!`;
      } else {
        document.querySelector(".result").innerText = `Could do better!`;
      }
      questionNumber = 1;
      gameScore = 0;
    }
  });
};
