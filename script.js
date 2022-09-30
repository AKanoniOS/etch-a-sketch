let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

buttons = document.querySelectorAll('button');

createCells('low-res');

buttons.forEach(button => {
    button.addEventListener('click', createCells(`${button.className}`));
});

function createCells(res) {
    if (res == 'low-res') {
        for (i=0;i<63;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.className = 'cell';
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'blue';
              });
        }
    } else if (res == 'med-res') {
        for (i=0;i<250;i++){
            let newDiv = document.createElement('div');
            newDiv.id = 'cell'+i;
            newDiv.className = 'cell';
            container.appendChild(newDiv);
            newDiv.addEventListener('mouseover', function (e) {
                e.target.style.background = 'blue';
              });
        }
    }
    
}
