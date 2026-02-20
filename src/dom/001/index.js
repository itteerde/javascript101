const clockDisplay = document.createElement('div');
clockDisplay.id = 'clock';
clockDisplay.style.fontFamily = 'sans-serif';
clockDisplay.style.fontSize = '48px';
clockDisplay.style.color = '#cc0000';
clockDisplay.style.padding = '20px';
document.body.appendChild(clockDisplay);

function updateClock() {
    clockDisplay.textContent = (new Date()).toUTCString();
}

setInterval(updateClock, 1000);
updateClock();