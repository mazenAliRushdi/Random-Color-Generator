const generateBtn = document.getElementById('generate-btn');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');
const copyBtn = document.getElementById('copy-btn');

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorDisplay.style.backgroundColor = randomColor;
    colorCode.value = randomColor;
}

function copyColorCode() {
    colorCode.select();
    document.execCommand('copy');
    alert('Color code copied!');
}

generateBtn.addEventListener('click', generateRandomColor);
copyBtn.addEventListener('click', copyColorCode);