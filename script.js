let container = document.createElement('div');
container.classList.add('sketch-container');
document.body.appendChild(container);

function createCells(res) {
    if (res == 1) {
        for (i=0;i<1;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("low-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = `${selectedColor}`;
              });
        }
    } else if (res % 4 == 0) {
        for (i=0;i<res;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("low-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = `${selectedColor}`;
              });
        }
    }

    if (res == 'low-res') {
        for (i=0;i<378;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("low-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = `${selectedColor}`;
              });
        }
    } else if (res == 'med-res') {
        for (i=0;i<1566;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("med-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = `${selectedColor}`;
              });
        }
    } else if (res == 'high-res') {
        for (i=0;i<8643;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("high-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = `${selectedColor}`;
              });
        }
    }
}

// add reset function
function reset() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => {
        item.style.background = 'red';
    })
}

// add delete function
function deleteCells() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(item => {
        container.removeChild(item);
    })
}

// color picker function
let selectedColor = 'blue'
function changeColor(color){
    selectedColor = `${color}`
}

// grid size selector
const gridSizes = [1,2,4,8,16,32,64]
const selectedSize = 1;
function changeGridSize(size){

}