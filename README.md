## SEI-39 Project 1

## Title: Where's This Country?

# Project Summary:

Where's This Country is a game that tests the player's knowledge of geography. Upon starting the game, they will be prompted to locate a country that has been randomly selected from a pre-coded list. Players will click on a tile of their choice to check their answer, with each round consisting of a total of 10 questions.

# Project Screenshots

![startpage](/images/for_readme/wheres_this_country_01.png)
![gameplay](/images/for_readme/wheres_this_country_02.png)
![resultpage](/images/for_readme/wheres_this_country_03.png)

# Minimum Viable Product (MVP)

My MVP is a fully-working game with one main game mode where players can locate countries based on a full world map. A total of 60 countries will be selected and coded using Javascript DOM, with all continents represented except Antarctica.

Every time a country is selected for a question, it will not be repeated for the rest of the round. For example, there are 60 possible options for question 1, 59 possible options for question 2 etc. When a round finishes and another new round is started, the possible choices will be reset back to the full 60.

A tally of the player's current score will be shown on the screen, as well as the current question number. The MVP will also include a start screen and an end screen - the end screen will collate the achieved score, and include a button to send the player back to the start screen after playing.

# Stretch Goals

My primary stretch goal involves creating a second game mode focusing on cities in Europe. A total of 50 European cities are coded in for this second mode. Codes should be largely reused from what is written for the main mode, as functionality will be largely similar.

My secondary stretch goal is to indicate to players the correct answer for each question, after they have answered. If they answered correctly, all correct tiles will also be temporarily highlighted in blue. If they answered wrongly, all correct tiles will be highlighted in red instead.

My additional stretch goals involve CSS, including a collapsible button the main menu for instructions, and a custom alert box during game play. The alert box will allow players to terminate the gameplay early and return to the start screen, and will replace the default 'alert' function that is available in JS.

# Approach

I focus on using JS DOM to create a grid of square buttons that will overlay the world map. A total of 1080 squares are created using this method. There is another function to add corresponding class names to the squares that cover a specific country - these class names are used to check the answer.

The game elements are broadly separated into 4 primary div containers, with the class names 'start-screen', 'game-canvas', 'game-canvas-europe' and 'end-screen'. Event listeners will toggle the 'style: display' properties of these containers, to toggle between different stages/modes of the game.

The primary JS function for the main gameplay (randomizeCountry) selects a random country from an array of countries, and uses that value to set the question. The selected country is spliced from the main array, and pushed into a separate array for later use.

Players click on any tile to answer. On click, the event listener for that tile will trigger, and the function will check for the class name(s) of that tile. If the tile's class name includes the value of the randomly selected country, it will be a correct answer.

Upon answering, all tiles for the correct answer will light up in either blue or red, depending on the outcome. A 'setTimeout' is used to reset the colour change after 3 seconds.

The game score and question number will update accordingly, and the function will continue looping until questionNumber updates to above 10. Upon answering the 10th question, all event listeners are removed to prevent any further clicking, and the end game screen will be brought up after a 3 second delay.

At the end of the game, the array of 10 spliced countries is pushed back into the main country list array, allowing the next round to start with all 60 options again. The array of spliced countries is emptied during the process.

# Key Features

1. Start screen with instructions, and buttons for each game mode

2. Game screen for country mode, which tracks the current question, question number and game score. Answers will be checked based on which tile is clicked.

3. Game screen for European city mode, which tracks the current question, question number and game score. Answers will be checked based on which tile is clicked.

4. Main menu button which allows the player to end the game early, and return to the main menu. Next round will restart from question 1 with the full allocation of countries or cities.

5. End game screen which diplays a result based on the game score achieved. Also allows players to return to the main menu.

# Technologies Used

The project focuses heavily on utilizing Javascript DOM to generate the html elements required. There is also a strong focus on CSS to style the game appropriately, as I aim for the projects in my portfolio to also showcase design and aesthetic values.
