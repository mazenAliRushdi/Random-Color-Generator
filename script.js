const generateBtn = document.getElementById('generate-btn');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorDisplay.style.backgroundColor = randomColor;
    colorCode.value = randomColor;
}

generateBtn.addEventListener('click', generateRandomColor);