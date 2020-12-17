const gridButton = document.querySelector('#new-grid');

class GridSystem {
    constructor (gridSide) {
        this.gridWrapper = document.querySelector('.grid-wrapper');
        this.gridSide = gridSide;
        this.numberOfItems = gridSide * gridSide;

        this.createGrid(this.numberOfItems);
    }

    resetGrid () {
        let grid = this.gridWrapper.querySelectorAll('.grid-item');
        
        grid.forEach(element => {
            element.remove();
        })
    }

    createGrid (numberOfItems) {
        this.resetGrid();

        this.gridWrapper.setAttribute('style', 'grid-template-columns: repeat(' + this.gridSide + ', 1fr);')

        for (let i = 0; i < numberOfItems; i++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('grid-item');
            gridElement.setAttribute('id', 'item-' + (i + 1));

            gridElement.addEventListener('mouseleave', () => {
                gridElement.style.opacity = 0.5; 
                console.log(gridElement.style.opacity);
            })

            this.gridWrapper.appendChild(gridElement);
        }
    }
}

function createNewGrid() {
    let gridSide = prompt('How many squares per side ?');
    new GridSystem(gridSide)
}

gridButton.addEventListener('click', createNewGrid);
