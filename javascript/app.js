import GridSystem from './GridSystem.js';

const gridButton = document.querySelector('#new-grid');
const eraseButton = document.querySelector('#erase');

let etchySketchy = new GridSystem(16);

function createNewGrid() {
    let gridSide = prompt('How many squares per side ?');
    etchySketchy = new GridSystem(gridSide);
}

function erase() {
    let grid = document.querySelectorAll('.grid-item');
    grid.forEach(element => {
        element.style.opacity = 0.1;
    })
}

gridButton.addEventListener('click', createNewGrid);
eraseButton.addEventListener('click', erase);

