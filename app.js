const rangeInput = document.querySelector(".rangeInput");
const rangeDisplay = document.querySelector(".gridSize");
const drawArea = document.querySelector(".drawArea");
const eraseButton = document.querySelector(".eraseButton");
const colorPicker = document.querySelector(".colorPicker");
let root = document.documentElement;
rangeInput.value =  16;


for(let i = 0; i < rangeInput.value; i++){
    for(let j = 0; j < rangeInput.value; j++){
        let cell = document.createElement("div");
        drawArea.appendChild(cell).className = "divTest"
        cell.addEventListener('mouseover', function(e){
            cell.style.backgroundColor = `${colorPicker.value}`;
        })
    }
    
}


eraseButton.addEventListener("click", function(e){
    drawArea.innerHTML = "";
    for(let i = 0; i < rangeInput.value; i++){
        for(let j = 0; j < rangeInput.value; j++){
            let cell = document.createElement("div");
            drawArea.appendChild(cell).className = "divTest"
            cell.addEventListener('mouseover', function(e){
                cell.style.backgroundColor = `${colorPicker.value}`;
            })
        }
        
    }
})


addEventListener('input', function(e){
    root.style.setProperty('--range-value', rangeInput.value)
    rangeDisplay.innerHTML = `${rangeInput.value} x ${rangeInput.value}`
    let size = rangeInput.value;
    drawArea.innerHTML = "";
    for(let i = 0; i < rangeInput.value; i++){
        for(let j = 0; j < rangeInput.value; j++){
            let cell = document.createElement("div");
            drawArea.appendChild(cell).className = "divTest"
            cell.addEventListener('mouseover', function(e){
                cell.style.backgroundColor =`${colorPicker.value}`;
            })
        }
        
    }
})


