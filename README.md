# the_bubble_burst
# The Bubble Burst Game 🎯

**The Bubble Burst Game** is a simple and engaging web-based game where players must click on specific numbered bubbles to increase their score before the timer runs out.

## 🎮 Features :
- **Dynamic Bubbles:** Randomly generated numbered bubbles make each game unique.
- **Score Tracking:** The game tracks the player's score based on correct clicks.
- **Timer:** A countdown timer adds an exciting challenge to the game.
- **Interactive Design:** Visual and hover effects enhance the user experience.

## 🛠️ Technologies Used :
- **HTML5:** For the structure of the web page.
- **CSS3:** For styling and animations.
- **JavaScript :** For game logic and interactivity.

## 🚀 How to Play :
1. Open the game in your browser.
2. Check the "Hit" number displayed at the top.
3. Click on the bubble with the same number as the "Hit" number.
4. Gain **10 points** for every correct click and watch your score increase!
5. The game ends when the timer runs out.

## 📋 Code Overview :

### HTML :
Defines the structure of the game, including:
- A panel displaying the **Hit**, **Timer**, and **Score**.
- A container for dynamically generated bubbles.

### CSS :
Styles the game elements with:
- A clean layout and responsive design.
- Hover effects on the bubbles for better user interaction.

### JavaScript :
Implements game functionality:
- **Bubble Generation:** Creates a random set of bubbles.
- **Timer:** Decreases the timer every second.
- **Score Calculation:** Increases the score on correct hits.
- **Game Over Logic:** Displays a "Game Over" message when the timer ends.

### Key Functions:
- `makeBubble()`: Generates the bubbles dynamically.
- `runTimer()`: Manages the countdown timer.
- `getnewHit()`: Updates the target number.
- `increaseScore()`: Increments the score for correct hits.

### Future Improvements :
- Difficulty Levels: Add multiple levels with varying timer speeds and more bubbles.
- Leaderboard: Implement a leaderboard to track high scores.
- Mobile Optimization: Enhance the user experience on mobile devices.

### Acknowledgements :
- This project was created as part of my learning journey in web development. Special thanks to resources and tutorials that inspired me to build this game.

