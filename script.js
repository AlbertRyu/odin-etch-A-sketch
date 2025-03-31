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

            row.appendChild(square)
        }
        container.appendChild(row)
    }
}

function changeColor(event){
    event.target.style.backgroundColor = 'black'
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