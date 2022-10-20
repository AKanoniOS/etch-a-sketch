const canvas = document.querySelector('.canvas')
const defaultSize = 5
let gridActive = true
let selectedColor = '#000000';
let selectedBGColor = '#FFFFFF';
let rainbow = false
let randColor = ''

function drawCanvas(size) {
    let gridElements = document.querySelectorAll(".gridElement")
    gridElements.forEach(item => {
        canvas.removeChild(item)
    })

    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i=0;i<size*size;i++){
        let newDiv = document.createElement('div')
        newDiv.style.backgroundColor = selectedBGColor
        newDiv.classList.add("gridElement")
        newDiv.classList.toggle('gridActive')

        newDiv.addEventListener('mouseover', () => {
            chooseRandomColor()
            if (rainbow) {
                newDiv.style.backgroundColor = '#' + randColor
            } else {
                newDiv.style.backgroundColor = selectedColor
            }
        })

        canvas.appendChild(newDiv)
        if (gridActive) {
            newDiv.classList.add('gridActive')
        } else {
            newDiv.classList.remove('gridActive')
        }
    }

    
}

function reset() {
    let gridElements = document.querySelectorAll(".gridElement")
    gridElements.forEach(item => {
        item.style.backgroundColor = selectedBGColor
    })
}
function invert() {
    let gridElements = document.querySelectorAll(".gridElement")
    gridElements.forEach(item => {
        item.style.toggle('active')
    })
}

function toggleGrid() {
    let gridElements = document.querySelectorAll(".gridElement") 
    gridActive = !gridActive
    gridElements.forEach(item => {
        item.classList.toggle('gridActive')
    })
}

function selectColor(color) {
    selectedColor = color
}

function toggleRainbow() {
    rainbow = !rainbow
}

function chooseRandomColor() {
    randColor = Math.floor(Math.random()*16777215).toString(16);
}






drawCanvas(defaultSize)