const generateBtn = document.getElementById('generate-btn');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');
const copyBtn = document.getElementById('copy-btn');
const colorFormat = document.getElementById('color-format');

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100) + '%';
    const l = Math.floor(Math.random() * 100) + '%';

    let color;
    switch (colorFormat.value) {
        case 'hex':
            color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
            break;
        case 'rgb':
            color = `rgb(${r}, ${g}, ${b})`;
            break;
        case 'hsl':
            color = `hsl(${h}, ${s}, ${l})`;
            break;
        default:
            color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    }

    colorDisplay.style.backgroundColor = color;
    colorCode.value = color;
}

function copyColorCode() {
    colorCode.select();
    document.execCommand('copy');
    alert('Color code copied!');
}

generateBtn.addEventListener('click', generateRandomColor);
copyBtn.addEventListener('click', copyColorCode);