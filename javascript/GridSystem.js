export default class GridSystem {
    constructor (gridSide = 16) {
        this.gridWrapper = document.querySelector('.grid-wrapper');
        this.grid = this.gridWrapper.querySelectorAll('.grid-item');
        this.gridSide = gridSide;
        this.numberOfItems = gridSide * gridSide;

        this.createGrid(this.numberOfItems);
    }

    /**
     * Removes all grid elements
     */
    resetGrid () {
        this.grid.forEach(element => {
            element.remove();
        })
    }

    /**
     * Creates a new set of div elements inside the grid wrapper
     * 
     * @param {number} numberOfItems 
     */
    createGrid (numberOfItems) {
        this.resetGrid();

        this.gridWrapper.setAttribute('style', 'grid-template-columns: repeat(' + this.gridSide + ', 1fr);')

        for (let i = 0; i < numberOfItems; i++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('grid-item');
            gridElement.setAttribute('id', 'item-' + (i + 1));
            gridElement.style.opacity = 0.1;

            gridElement.addEventListener('mouseover', () => {
                gridElement.style.opacity = 1;
            })

            gridElement.addEventListener('mouseleave', () => {
                gridElement.style.opacity = 0.5;
            })

            this.gridWrapper.appendChild(gridElement);
        }
    }
}