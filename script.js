console.log("Hello World")

const container = document.querySelector('.container')


function genGrid(size){
    for (let i=0; i<size; i++){

        let row = document.createElement('div')
        row.classList = 'row'

        for (let j=0; j<=size; j++){
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



genGrid(10)