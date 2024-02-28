// Create a 10 x 10 grid
const rows = 10;
const cols = 10;

// Get the container element in the HTML page
const container = document.getElementById('grid-container');

// Create the grid and append it to the container
for(let i = 0; i < rows; i++) {
  for(let j = 0; j < cols; j++) {
    // Create a div element for each grid cell
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
  }
}