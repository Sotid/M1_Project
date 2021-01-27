# Mr. Miyagi`s dream

## Description

Mr. Miyagi loves food. He never stops eating. But he is also very picky. The object of the game is to give him all the food that he likes until he is full and happy. But watch out for the broccoli. He hates it!

## MVP (DOM - CANVAS)

A dog that can move right and left and has to grab the food that is flooding through the screen. Each food add different points except the brocoli that substracts points and has to be avoided. The goal is to reach 100 points so as to win. If the score reaches 0 you loose.

## Data structure

1. index.html
2. style.css
3. main.js
4. game.js
5. player.js
6. food.js

### 1. index.html

### 2. style.css

### 3. main.js

#### Methods

- BuildDom
- CreateSplashScreen
- RemoveSplashScreen
- CreateGameScreen
- RemoveGameScreen
- StartGame
- EndGame
- CreateGameOverScreen
- RemoveGameOverScreen
- CreateWinScreen
- RemoveWinScreen

### 4. Game Class

#### Constructor

- canvas
- ctx
- food
- player
- gameIsOver
- gameIsWon
- gameScreen
- score

#### Methods

- StartGame
- StartLoop
- FoodGrabbed
- screenCollisions
- GameOverWin
- GameOverLoose
- UpdateScore

### 5. Player Class

#### Constructor

- canvas
- ctx
- size
- x
- y
- direction
- speed

#### Methods

- SetDirection
- screenCollisions
- didCollide
- Draw

### 6. food.js

#### Constructor

- canvas
- ctx
- x

#### Methods

- Draw
- updatePosition
- isInsideScreen

## States y States Transitions

##### startScreen

- Start the game when Start button is clicked

##### gameScreen

- Score Indicator
- Game running until the player reaches 0 or 100 points.
- If player reaches 100 points goes to WinScreen.
- If players reaches 0 points goes to gameOverScreen.

##### gameOverScreen

- Game Over message and Play again button
- Goes back to gameScreen when Play again button is clicked.

##### winScreen

- Restart button.
- Goes back to Game Screen when Restart button is clicked

## Task

- Create git repository and the 6 files
- Connect the files
- Add the canvas
- Create the 4 screens
- Add event listeners to the buttons for the transition
- Create the startGame function
- Create the game class, its constructor and the methods to be used
- Create the player class, its constructor and the methods to be used
- Create the food class, its constructor and the methods to be used
- Extend food class so as to create different types of food
- Start updating the startLoop method
- Draw the player and the foods
- Update the setDirection() and didCollide () in the player.js
- UpdatePosition() and isInsideScreen() in the foods.js
- Create updateScore ()
- Style the background, the buttons and other visual elements

## Backlog

- Add timer
- Add scoreboard

## Links

### Trello

[Link Trello]

### Git

[https://github.com/Sotid/M1_Project]
[https://sotid.github.io/M1_Project/]

### Slides

[https://docs.google.com/presentation/d/1fWe7zxqHT0ODRsBLKSWEXy0CfyYlT1bzXhslhVYb3w0/edit#slide=id.g6edfa80311_0_37524]
