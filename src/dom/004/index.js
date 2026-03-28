document.body.appendChild(document.createElement('div'));
document.querySelector('div').style.borderColor = '#990000';
document.querySelector('div').style.color = '#990000';
document.querySelector('div').innerText = 'Here!';
document.querySelector('div').style.fontSize = '24px';
document.querySelector('div').style.fontWeight = 'bold';

document.querySelector('div').addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

document.querySelector('div').addEventListener("mouseup", (event) => {
    event.target.style.color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
    console.log({ fontSize: event.target.style.fontSize })
    if (event.button === 2) {
        event.target.style.fontSize = `${Math.round(Number.parseInt(event.target.style.fontSize.slice(0, event.target.style.fontSize.length - 2)) / 1.2)}px`;
    } else {
        event.target.style.fontSize = `${Math.round(Number.parseInt(event.target.style.fontSize.slice(0, event.target.style.fontSize.length - 2)) * 1.2)}px`;
    }
});
