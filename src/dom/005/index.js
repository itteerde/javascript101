const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function applyStyles() {
    ctx.strokeStyle = '#8B0000'; // Dark Red
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
}

function resizeCanvas() {
    // 1. Take a snapshot of the current drawing
    const tempImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // 2. Resize (this clears the canvas)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 3. Restore styles (resizing resets these too)
    applyStyles();

    // 4. Put the drawing back
    ctx.putImageData(tempImage, 0, 0);
}

// --- Drawing Logic ---
function startDrawing(e) {
    if (e.button !== 0) return; // Only draw with left-click
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    [lastX, lastY] = [e.clientX, e.clientY];
}

function stopDrawing() {
    isDrawing = false;
}

// --- Right-Click Reset ---
window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevents the actual menu from popping up
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// --- Event Listeners ---
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
window.addEventListener('mouseup', stopDrawing);
window.addEventListener('resize', resizeCanvas);

// Initial setup
resizeCanvas();