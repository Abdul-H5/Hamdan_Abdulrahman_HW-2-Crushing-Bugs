# Human Anatomy Puzzle Game - HW #2 Crushing Bugs

## Project Overview
This repository contains my submission for **HW #2 – Crushing Bugs (Troubleshooting JavaScript)**. The project is an interactive drag-and-drop educational game where users match anatomy labels to the correct body parts. 

The initial codebase contained several functional bugs and lacked visual feedback. My objective for this assignment was to analyze the problems, plan a solution, and write clean, modular JavaScript to fix the application.

---

## Written Plan & Problem Analysis

As required by the assignment brief, here is my step-by-step analysis and written plan for solving the bugs in the application.

### Bug 1: Multiple Labels in One Drop Zone
* **Analysis:** The game initially allowed users to drop an infinite number of labels into a single target zone. The original `dropped` function blindly appended the dragged element without checking if the drop zone was already occupied.
* **Solution:** Inside the `dropped` function, I check the length of the drop zone's `children` property. If `this.children.length` is greater than `0`, I use an early `return` statement to exit the function. This prevents any additional pieces from being appended to an already occupied zone.

### Bug 2: Reset Button Doesn't Work
* **Analysis:** The "Reset Puzzle" button was present in the HTML but lacked any JavaScript variables, functionality, or event listeners to make it operational. Labels were stuck in the drop zones permanently after being placed.
* **Solution:** 
  1. I created variables using `document.querySelector` for the reset button (`#reset-btn`) and the original label container (`#label-box`).
  2. I created a `resetPuzzle` function that uses a `for` loop to iterate through the `labels` NodeList. 
  3. Inside the loop, I append each label back to the starting container, giving the player a fresh board.
  4. Finally, I attached a `click` event listener to trigger this function.

### Bonus Feature: Drop Zone Highlighting
* **Analysis:** The user had no visual feedback to indicate they were hovering over a valid drop area, resulting in poor UX.
* **Solution:** I created named `dragEnter` and `dragLeave` functions that add and remove a `.highlight` CSS class. I attached these to the drop zones using event listeners. I also ensured the highlight is removed inside the `dropped` function once the label is successfully placed.

---



## GitHub Branching Strategy
To follow GitHub best practices and the assignment rubric, the work was divided into specific branches before being merged into the `master` branch. The repository history includes:

1. `master` - The main production branch.
2. `fix-multiple-labels-bug` - Branch dedicated to fixing the drop zone stacking issue.
3. `fix-reset-button-bug` - Branch dedicated to implementing the reset button logic.
4. `feature-dropzone-highlight` - Branch dedicated to the CSS/JS for the UX highlighting bonus.

---

## How to Run the Project
1. Clone or download this repository to your local machine.
2. Open `index.html` in any modern web browser.
3. Drag the labels (Heart, Lungs, Liver, Stomach, Intestines) into the designated target zones on the anatomy image.
4. Click "Reset Puzzle" to clear the board and try again.