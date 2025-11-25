// Scan Card page JavaScript

let flashOn = false;
let scanMode = 'single';

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

function setScanMode(mode) {
    scanMode = mode;
    const singleBtn = document.getElementById('singleScanBtn');
    const multiBtn = document.getElementById('multiScanBtn');
    
    if (mode === 'single') {
        singleBtn.classList.add('active');
        multiBtn.classList.remove('active');
    } else {
        singleBtn.classList.remove('active');
        multiBtn.classList.add('active');
    }
    
    console.log('Scan mode:', mode);
}

function captureCard() {
    console.log('Capturing card in', scanMode, 'mode');
    
    // Simulate capture
    const frame = document.querySelector('.scan-frame');
    if (frame) {
        frame.style.borderColor = '#10b981';
        setTimeout(() => {
            frame.style.borderColor = '#ffffff';
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

function showHelp() {
    alert('Position your business card within the frame. The app will automatically capture it when detected.');
}

