
const gridContainer = document.querySelector('#gridContainer');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    let oneSide = Number(prompt('How many squares should each side have?'));
    if (oneSide > 100 || oneSide < 1) {
        alert('Please press the button again and choose a number between 1 and 100');
    } else {
        gridContainer.textContent = '';
        let param = 1000 / oneSide;
        let numberOfSquares = oneSide * oneSide;
        createSquares(numberOfSquares, param);
        createSketchFeature();
    };
    
})

function createSquares(numberOfSquares, param) {
    for (i = 0; i < numberOfSquares; i++) {
        const divGrid = document.createElement('div');
        divGrid.classList.add('grid');
        divGrid.style.width = `${param}px`;
        divGrid.style.height = `${param}px`;
        gridContainer.appendChild(divGrid);
    };
}

function createSketchFeature() {
    const newGrid = document.querySelectorAll('.grid');
    for (j = 0; j < newGrid.length; j++) {
        let elem = newGrid[j];
        // elem.style.width = `${param}px`;
        // elem.style.height = `${param}px`;
        elem.addEventListener('mouseover', () => {
            elem.style.backgroundColor = 'darkgrey';
        });
        elem.addEventListener('mouseout', () => {
            setTimeout(function() {
                elem.style.backgroundColor = '';
            }, 500)
        });
    };
}




