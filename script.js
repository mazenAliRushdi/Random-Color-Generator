const generateBtn = document.getElementById('generate-btn');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');
const copyBtn = document.getElementById('copy-btn');
const colorFormat = document.getElementById('color-format');
const colorRange = document.getElementById('color-range');

function generateRandomColor() {
    let r, g, b, h, s, l;

    switch (colorRange.value) {
        case 'warm':
            h = Math.floor(Math.random() * 60);
            s = Math.floor(Math.random() * 100) + '%';
            l = Math.floor(Math.random() * 100) + '%';
            break;
        case 'cold':
            h = Math.floor(Math.random() * 180 + 180);
            s = Math.floor(Math.random() * 100) + '%';
            l = Math.floor(Math.random() * 100) + '%';
            break;
        default:
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            h = Math.floor(Math.random() * 360);
            s = Math.floor(Math.random() * 100) + '%';
            l = Math.floor(Math.random() * 100) + '%';
    }

    let color;
    switch (colorFormat.value) {
        case 'hex':
            if (colorRange.value === 'all') {
                color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
            } else {
                color = hslToHex(h, parseInt(s), parseInt(l));
            }
            break;
        case 'rgb':
            if (colorRange.value === 'all') {
                color = `rgb(${r}, ${g}, ${b})`;
            } else {
                color = `rgb(${hslToRgb(h, parseInt(s), parseInt(l))})`;
            }
            break;
        case 'hsl':
            color = `hsl(${h}, ${s}, ${l})`;
            break;
        default:
            if (colorRange.value === 'all') {
                color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
            } else {
                color = hslToHex(h, parseInt(s), parseInt(l));
            }
    }

    colorDisplay.style.opacity = 0;
    setTimeout(() => {
        colorDisplay.style.backgroundColor = color;
        colorDisplay.style.opacity = 1;
    }, 300);
    colorCode.value = color;
}

function copyColorCode() {
    colorCode.select();
    document.execCommand('copy');
    alert('Color code copied!');
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = s * (1 - Math.abs(2 * l - 1)),
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
}

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    let c = s * (1 - Math.abs(2 * l - 1)),
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return [r, g, b];
}

generateBtn.addEventListener('click', generateRandomColor);
copyBtn.addEventListener('click', copyColorCode);

colorDisplay.addEventListener('touchstart', () => {
    colorDisplay.style.transform = 'scale(1.05)';
});

colorDisplay.addEventListener('touchend', () => {
    colorDisplay.style.transform = 'scale(1)';
});