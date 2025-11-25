// Create Card page JavaScript

let currentStyle = 'minimal';
let currentColor = 'blue-purple';

document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
});

function updatePreview() {
    const name = document.getElementById('nameInput').value || 'Kim Min-jun';
    const company = document.getElementById('companyInput').value || 'Software Engineer, ScannerNet Inc.';
    const phone = document.getElementById('phoneInput').value || '+8210-1234-5678';
    const email = document.getElementById('emailInput').value || 'minjun.kim@scannernet.co.kr';
    
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewTitle').textContent = company;
    document.getElementById('previewContact').textContent = `${phone} | ${email}`;
    
    // Update preview card style
    updatePreviewStyle();
}

function updatePreviewStyle() {
    const preview = document.getElementById('cardPreview');
    const colorMap = {
        'blue-purple': 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        'dark': 'linear-gradient(135deg, #1f2937, #374151)',
        'teal': 'linear-gradient(135deg, #14b8a6, #0d9488)',
        'orange-pink': 'linear-gradient(135deg, #f97316, #ec4899)'
    };
    
    if (preview && colorMap[currentColor]) {
        preview.style.background = colorMap[currentColor];
    }
}

function selectStyle(style) {
    currentStyle = style;
    const styleCards = document.querySelectorAll('.style-card');
    styleCards.forEach(card => {
        if (card.getAttribute('data-style') === style) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    console.log('Style selected:', style);
}

function selectColor(color) {
    currentColor = color;
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        if (swatch.getAttribute('data-color') === color) {
            swatch.classList.add('active');
        } else {
            swatch.classList.remove('active');
        }
    });
    updatePreviewStyle();
    console.log('Color selected:', color);
}

function addCustomColor() {
    // Open color picker
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.onchange = function(e) {
        const color = e.target.value;
        console.log('Custom color selected:', color);
        // Add new color swatch to palette
    };
    colorInput.click();
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Logo uploaded:', file.name);
        const reader = new FileReader();
        reader.onload = function(e) {
            // Update preview with logo
            console.log('Logo loaded');
        };
        reader.readAsDataURL(file);
    }
}

function generateWithAI() {
    console.log('Generating with AI...');
    // Simulate AI generation
    const styles = ['minimal', 'corporate', 'creative'];
    const colors = ['blue-purple', 'dark', 'teal', 'orange-pink'];
    
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    selectStyle(randomStyle);
    selectColor(randomColor);
    
    alert('AI has generated a new design for your card!');
}

function saveCard() {
    const name = document.getElementById('nameInput').value;
    const company = document.getElementById('companyInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    
    if (!name || !company || !phone || !email) {
        alert('Please fill in all required fields.');
        return;
    }
    
    console.log('Saving card:', { name, company, phone, email, style: currentStyle, color: currentColor });
    
    // Simulate save
    alert('Card saved successfully!');
    window.location.href = 'my-cards.html';
}

