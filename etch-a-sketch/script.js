const gridContainer = document.getElementById('grid-container');
const elements = document.getElementsByClassName('grid-element');
const slider = document.getElementById('range-slider');
const changeGridBtn = document.getElementById('change-grid-value');
const clear = document.getElementById('clear');
const colorPicker = document.getElementById('colorpicker');
const checkbox = document.getElementById('rainbow-check');
let sliderOutput = document.getElementById('slider-value');
let over = false;

clear.onclick = function() {
    clearGrid();
}

changeGridBtn.onclick = function() {
    clearGrid();
}

window.addEventListener('DOMContentLoaded', defaultSlider);

function defaultSlider() {
    sliderOutput.innerHTML = `${slider.value} × ${slider.value}`;
    clearGrid();
}

function clearGrid() {
    let value = parseInt(slider.value);

    gridContainer.replaceChildren();
    gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

    createGrid();
}

function createGrid() {
    let value = parseInt(slider.value);

    for (let i = 0; i < value*value; i++){
        let div = document.createElement('div');
        div.classList.add('grid-element');
        gridContainer.appendChild(div);
    }  
    getSliderValue();
    drawing();
}

function getSliderValue() {
    slider.oninput = function () {
        sliderOutput.innerHTML = `${slider.value} × ${slider.value}`;
    }
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function drawing() {
    for (element of elements) {
        element.addEventListener(
            "mousedown",
            (event) => {
                if (checkbox.checked){
                    let r = randomColor();
                    let g = randomColor();
                    let b = randomColor();
                    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                }
                else {
                    event.target.style.backgroundColor = colorPicker.value;
                }
                over = true;
            }, false
        );

        element.addEventListener(
            "mouseup",
            (event) => {
                if (checkbox.checked){
                    let r = randomColor();
                    let g = randomColor();
                    let b = randomColor();
                    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                }
                else {
                    event.target.style.backgroundColor = colorPicker.value;
                }
                over = false;
            }, false
        );

        element.addEventListener(
            "mouseover",
            (event) => {
                if (over && checkbox.checked){
                    let r = randomColor();
                    let g = randomColor();
                    let b = randomColor();
                    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                }
                else if (over) {
                    event.target.style.backgroundColor = colorPicker.value;
                }
            }, false
        );
    }
}
