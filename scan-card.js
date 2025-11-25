// Scan Card page JavaScript

let flashOn = false;

document.addEventListener('DOMContentLoaded', function() {
    const flashToggle = document.getElementById('flashToggle');
    
    if (flashToggle) {
        flashToggle.addEventListener('click', function() {
            flashOn = !flashOn;
            this.style.opacity = flashOn ? '1' : '0.5';
            console.log('Flash:', flashOn ? 'ON' : 'OFF');
        });
    }
});

function captureCard() {
    console.log('Capturing card');
    
    // Simulate capture
    const frame = document.querySelector('.scan-frame');
    if (frame) {
        frame.classList.add('scan-frame-active');
        setTimeout(() => {
            frame.classList.remove('scan-frame-active');
            // Navigate to create card page after capture
            setTimeout(() => {
                window.location.href = 'create-card.html';
            }, 500);
        }, 300);
    }
}

function openGallery() {
    console.log('Opening gallery');
    // Create file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        if (e.target.files && e.target.files[0]) {
            console.log('Image selected:', e.target.files[0].name);
            // Navigate to create card page
            window.location.href = 'create-card.html';
        }
    };
    input.click();
}

function toggleFlash() {
    flashOn = !flashOn;
    const flashToggle = document.getElementById('flashToggle');
    if (flashToggle) {
        flashToggle.style.opacity = flashOn ? '1' : '0.4';
    }
    console.log('Flash:', flashOn ? 'ON' : 'OFF');
}

