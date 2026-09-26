const mainContainer = document.getElementById('mainContainer');
const grid = document.createElement('div');

let gridSize = prompt("Enter the grid size. Max is 100:","18");

for (let i = 1; i <= 18; i++) {
  const grid = document.createElement('div');
  
        grid.className = 'pix';
  grid.textContent = ` ${i}`;
  
  mainContainer.appendChild(grid);

}

const pixel = document.querySelectorAll('.pix')

pixel.forEach(p => {
    p.addEventListener('mouseenter',() => {
        p.classList.remove('pix');    // 3. Corrected method syntax and target element
        p.classList.add('box');    // 3. Corrected method syntax and target element
        console.log('hy');
        
    })
});

