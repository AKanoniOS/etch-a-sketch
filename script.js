let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

function createCells(res) {
    if (res == 'low-res') {
        for (i=0;i<378;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.classList.add("cell");
            newDiv.classList.add("low-res");
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'blue';
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
                e.target.style.background = 'blue';
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
                e.target.style.background = 'blue';
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