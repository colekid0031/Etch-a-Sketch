const mainContainer = document.getElementById('mainContainer');
const grid = document.createElement('div');

let userChoice = prompt("Enter the grid size. Max is 100:","18");
var i = 0;
// console.log(userChoice);


// Ensure i is declared globally in your script scope
var i = 0; 

function roundToTwelve(userChoice) {
  // Convert the input into an actual number
  let parsedChoice = Number(userChoice);

  // Check if the conversion failed, or if the input was empty/whitespace
  if (isNaN(parsedChoice) || userChoice === null || String(userChoice).trim() === '') {
    alert('Hey only numbers allowed');
    return;
  }
  
  // Calculate and update the global variable 'i'
  if (parsedChoice % 12 !== 0) {
    i = Math.floor(parsedChoice / 12) * 12;

  } else {
    i = parsedChoice;
  }
  
  return i;
}


console.log(i);
roundToTwelve(userChoice)


i = i * -1;


for ( ;i <= 17; i++) {
  const grid = document.createElement('div');
  
        grid.className = 'pix';  
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

