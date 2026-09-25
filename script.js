const mainContainer = document.getElementById('mainContainer');

for (let i = 1; i <= 18; i++) {
  const grid = document.createElement('div');
  
  grid.className = 'grid box';
  grid.textContent = ` ${i}`;
  
  mainContainer.appendChild(grid);
  console.log();
  
}