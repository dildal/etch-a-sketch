const etch = document.querySelector('.etch-a-sketch');
const gridSizeButton = document.querySelector('#grid-size');
const resetButton = document.querySelector('#reset');
let gridSize = 16;

window.onload= resetGrid();

resetButton.addEventListener('click', resetGrid)

gridSizeButton.addEventListener('click', () => {
	let numberOfTiles = +prompt("How many little squares do you want this big square to be made out of?");
	while(numberOfTiles > 100 || isNaN(numberOfTiles)){
		numberOfTiles = +prompt('Enter a NUMBER and make sure its less than 100.');
	}
	setGrid(numberOfTiles);
	resetGrid();
})

function getRandomColor() {
	return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function setGrid(newSize) {
	gridSize = newSize;
}

function resetGrid(){
	while(etch.firstChild){
		etch.removeChild(etch.firstChild)
	}
	for(let i = 0; i < gridSize * gridSize; i++){
		let percent = 1/gridSize * 100;
		console.log(`height: ${percent}; width: ${percent}; background-color: coral;`);
		let tile = document.createElement('div');
		tile.classList.add('tile');
		tile.style.cssText = `height: ${percent}%; width: ${percent}%;`;
		etch.appendChild(tile);
		tile.addEventListener('mouseover', function() {
			this.style.backgroundColor = getRandomColor();
		})
	}
}
