console.log("Hello World")

let size = 64 // Defaut density of the grid 64x64
const container = document.querySelector('.container')


function genGrid(size){
    for (let i=0; i<size; i++){

        let row = document.createElement('div')
        row.classList = 'row'

        for (let j=0; j<size; j++){
            const square = document.createElement('div')
            square.classList = 'square'
            square.addEventListener('mouseenter',changeColor) 
            square.addEventListener('mouseenter',addOpacity)

            row.appendChild(square)
        }
        container.appendChild(row)
    }
}

// Decide if its colorful
let colorful = false // Default as flase
const colorToggleButton = document.querySelector('.colorToggle')
colorToggleButton.addEventListener('click',toggleColor)

function toggleColor(){
    colorful = !colorful
    colorToggleButton.textContent = `colorful : ${colorful}`
}

function changeColor(event){
    let r = 0, g = 0, b = 0 // Default as Black
    if (colorful) {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)
    } 
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`
    event.target.removeEventListener('mouseenter',changeColor)
}

function addOpacity(event){
    opacity = Number(event.target.style.opacity)
    if (opacity < 1){
        opacity += 0.1
        event.target.style.opacity = opacity
    } else {
        event.target.removeEventListener('mouseenter',addOpacity)
    }
}


const reGen = document.querySelector('.reGen')
reGen.addEventListener('click',restart)

function restart(){
    size = prompt(
        `Please enter the desired size of sketchpad:
        eg. for 50x50 grid, enter 50. 
        Default: 64
        Upper Limit: 100`,64)
    if (size > 100){
        alert('This is above the limit 100! Please try again with a smaller number.')
        return
    }
    container.innerHTML = '' 
    genGrid(size)
}

genGrid(size)