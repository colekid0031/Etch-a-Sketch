const mainContainer = document.getElementById('mainContainer');


let userChoice = prompt("Enter the grid size. Max amount: 50000","18");

var i = 0;

function roundToTwelve(userChoice) {
  // Convert the input into an actual number
  let parsedChoice = Number(userChoice);

  // Check if the conversion failed, or if the input was empty
  if (isNaN(parsedChoice) || userChoice === null || String(userChoice).trim() === '') {
    alert('Hey only numbers allowed');
    return;
  }
  
  // Calculate n update the global variable 'i'
  if (parsedChoice % 12 !== 0) {
    i = Math.floor(parsedChoice / 12) * 12;

  } else {
    i = parsedChoice;
  }
  
  return i;
}



roundToTwelve(userChoice)


i = i * -1;


for ( ;i <= 17; i++) {
  const grid = document.createElement('div');
  
        grid.className = 'pix';  
        grid.classList.add('boxSize');   

  mainContainer.appendChild(grid);
 console.log(`hy`);
}

let isLineOn = true;

let lines = document.querySelector('#removeLines');
  lines.addEventListener('click',function(){
  const gridSquares = document.querySelectorAll('.boxSize');
  const pixelLines = document.querySelectorAll('.pix');

    
  gridSquares.forEach(pixel => {
  pixel.classList.toggle('pix')
  
  console.log('Lines On');
})});







const pixel = document.querySelectorAll('.pix')
const Dragclick = document.querySelector('#dragClick');
let dragOn = true;

Dragclick.addEventListener('click', function(){
  dragOn = !dragOn;
  console.log(`Drag mode active: ${dragOn}`);
});

// Loop through pixels once and check the live state inside the events
pixel.forEach(p => {
    // Regular click behavior (always works)
    p.addEventListener('mousedown', () => {
        p.classList.remove('pix');   
        p.classList.add('box');   
    });

    // Hover behavior (only runs if dragOn is false)
    p.addEventListener('mouseover', () => {
        if (dragOn === false) {
            p.classList.remove('pix');   
            p.classList.add('box'); 
        }
    });
});








// Grid size control
const changeSize = document.querySelector('#gridSizeCtr');

function sizeEditor(pixelWidth, pixelHeight) {
    const boxes = document.querySelectorAll('.boxSize');

    boxes.forEach(box => {
        box.style.width = pixelWidth + 'px';
        box.style.height = pixelHeight + 'px';
    });
}

changeSize.addEventListener('click', () => {
    const pixelWidth = prompt('Enter A value for X/ width','20')
    const pixelHeight = prompt('Enter A value for Y/ Height','20')
    sizeEditor(pixelWidth,pixelHeight);
});
