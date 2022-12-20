const container = document.querySelector('#container')
const navbar = document.querySelector('body')
let input
let start = input || 256;
addDiv()

 
//creates initial 16x16 grid
function addDiv () {
// code to create the rows needed as part of the CSS grid
  container.setAttribute('style', 
  `grid-template-columns: repeat(16, 1fr)`);
  button(); 
// build individual divs for grid  
for ( let i = 1; i <= 256; i+=1 ) {
  let gridDiv = document.createElement("div");
  gridDiv.setAttribute('class', 'grid')
  gridDiv.innerHTML = ''
  container.appendChild(gridDiv);
// turns div to black
  let divColor = document.querySelectorAll('.grid');
  divColor.forEach((div) =>  {
    div.addEventListener('mouseover', () => {
      div.setAttribute ('style','background: black');
    }); 
  });
};}


function clearGrid () {
  let removeButton = document.querySelector('button')
  removeButton.remove('button')
  button();
 
  let removeDiv = document.querySelectorAll('.grid');
      for ( let i = 0; i < removeDiv.length; i+=1 ) {
      removeDiv[i].remove()}
    
    input = prompt ('Select a number between 6-24')
    console.log(input)
    container.setAttribute('style', 
    `grid-template-columns: repeat(${input}, 1fr)`);

   for ( let i = 1; i <= input*input; i+=1 ) { 
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute('class', 'grid')
    gridDiv.innerHTML = ''
    container.appendChild(gridDiv);

    let divColor = document.querySelectorAll('.grid');
    divColor.forEach((div) =>  {
      div.addEventListener('mouseover', () => {
        div.setAttribute ('style','background: black');
      });
    });
};
}
  

// Turns div black

let divColor = document.querySelectorAll('#grid');
divColor.forEach((div) =>  {
  div.addEventListener('mouseover', () => {
    div.setAttribute ('style','background: black');
  });
});

function button (){
let newGrid = document.createElement('button');
newGrid.innerHTML = 'New Grid';
navbar.appendChild (newGrid)
newGrid.addEventListener('click', clearGrid);
}

