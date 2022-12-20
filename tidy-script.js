const container = document.querySelector('#container')
const navbar = document.querySelector('body')
let input
let start = input || 256;
let gridRow = input || 16;
addDiv()

 
function setAttribute () {
    // code to create the rows needed as part of the CSS grid
    container.setAttribute('style', 
    `grid-template-columns: repeat(${gridRow}, 1fr)`);
}

function setGrid (){
    // build individual div for grid 
    for ( let i = 0; i < start; i+=1 ) {
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute('class', 'grid')
        gridDiv.innerHTML = ``
        container.appendChild(gridDiv);
};}

function clearGrid () {
    let removeDiv = document.querySelectorAll('.grid');
    for ( let i = 0; i < removeDiv.length; i+=1 ) {
    removeDiv[i].remove()}
}

function blackDiv () {
    //turns div black
    let divColor = document.querySelectorAll('.grid');
    divColor.forEach((div) =>  {
      div.addEventListener('mouseover', () => {
        div.setAttribute ('style','background: black');
      });
    });}

function button (){
        let cGrid = document.createElement('button');
        let nGrid = document.createElement('button');
        nGrid.innerHTML = 'New Grid Size';
        cGrid.innerHTML = 'Clear'
        nGrid.addEventListener('click', newGrid);
        cGrid.addEventListener('click', restartGrid);
        navbar.appendChild (nGrid)
        navbar.appendChild (cGrid)       
}

function removeButton () {
    let removeButton = document.querySelectorAll('button')
    
    for ( let i = 0; i < removeButton.length; i+=1 ) {
        removeButton[i].remove()}
}

//creates initial 16x16 grid
function addDiv () {
    setAttribute(); 
    setGrid();
    blackDiv();
    button();
}

function newGrid(){
    input = prompt('Select a number between 8 and 24');
    gridRow = input;
    start = input*input;
    removeButton();
    clearGrid();
    setAttribute();
    setGrid();
    blackDiv();
    button();
}

//create default 16x16 grid
function restartGrid () {
    start = input*input || 256;
    gridRow = input || 16;
    removeButton();
    clearGrid();
    setAttribute();
    setGrid();
    blackDiv();
    button();
}




