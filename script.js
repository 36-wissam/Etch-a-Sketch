const grid = document.querySelector('.grid');  // Select the grid container
const slider = document.querySelector('#slider'); // Select the slider input
const sizeValue = document.querySelector('#sizeValue');// Select the element to display the grid size
const clearBtn = document.querySelector('#clear');// Select the clear button
const colorPicker = document.querySelector('#colorPicker');// Select the color picker input
const rainbowBtn = document.querySelector('#rainbow');// Select the rainbow mode button


// ariables for the color and rainbow mode
let currentColor = colorPicker.value; 
let isRainbowMode = false;


// Create the grid based on the selected size
function createGrid(size){

grid.innerHTML = '';

const squareSize = 636 / size;

for(let i = 0; i < size * size; i++){

const cell = document.createElement('div');
cell.classList.add('cell');

cell.style.width = squareSize + 'px';
cell.style.height = squareSize + 'px';

cell.addEventListener('mouseover', () => {

if(isRainbowMode){
cell.style.backgroundColor = getRandomColor();
}else{
cell.style.backgroundColor = currentColor;
}

});

grid.appendChild(cell);

}

}


// Function to generate a random color
function getRandomColor(){

const letters = '0123456789ABCDEF';
let color = '#';

for(let i = 0; i < 6; i++){
color += letters[Math.floor(Math.random() * 16)];
}

return color;

}


// Event listeners for the slider, color picker, rainbow button, and clear button
slider.addEventListener('input', () => {

sizeValue.textContent = slider.value;
createGrid(slider.value);

});



colorPicker.addEventListener('input', () => {

currentColor = colorPicker.value;
isRainbowMode = false;
rainbowBtn.classList.remove('active');

});



rainbowBtn.addEventListener('click', () => {

isRainbowMode = !isRainbowMode;
rainbowBtn.classList.toggle('active');

});



clearBtn.addEventListener('click', () => {

createGrid(slider.value);

});


// Initialize the grid with the default size
createGrid(16);