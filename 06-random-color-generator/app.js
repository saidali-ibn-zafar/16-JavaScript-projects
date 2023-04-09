const containerEl = document.querySelector('.container');

for (let i = 0; i < 30; i++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');

generateColors();

function generateColors(){
    colorContainerEls.forEach(function(colorContainerEl){
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}


// RANDOM NUMBER AND MAKING COLOR CODE
function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        // console.log(randomNum);
        colorCode += chars.substring(randomNum, randomNum + 1);
        // console.log(colorCode);
    }
    return colorCode;
}

randomColor();