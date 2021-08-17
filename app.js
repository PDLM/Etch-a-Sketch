const rangeInput = document.querySelector(".rangeInput");
const rangeDisplay = document.querySelector(".gridSize");
rangeInput.value = 16;

addEventListener('input', function(e){
    rangeDisplay.innerHTML = `${rangeInput.value} x ${rangeInput.value}`
})


