import GridSystem from './GridSystem.js';

// DOM variables
const gridButton = document.querySelector('#new-grid');
const eraseButton = document.querySelector('#erase');

// Instantiate a new grid system
let etchySketchy = new GridSystem(16);

/**
 * Callback function to create a nnew grid
 */
function createNewGrid() {
    let gridSide = prompt('How many squares per side ?');

    if (gridSide <= 64 && gridSide > 1) {
        etchySketchy = new GridSystem(gridSide);
    } else {
        alert('Side must be between 2 and 64 squares !');
    }
}

/**
 * Callback function to erase the current grid
 */
function erase() {
    let grid = document.querySelectorAll('.grid-item');
    grid.forEach(element => {
        element.style.opacity = 0.1;
    })
}

// Button events
gridButton.addEventListener('click', createNewGrid);
eraseButton.addEventListener('click', erase);

