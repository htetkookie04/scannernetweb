// Profile page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // All functionality is handled via onclick attributes in HTML
});

function editProfile() {
    console.log('Edit profile clicked');
    // Navigate to edit profile page or show edit modal
    alert('Edit profile functionality');
}

function showQRCode() {
    console.log('Show QR code clicked');
    // Show QR code modal
    alert('QR Code functionality');
}

function openSettings() {
    console.log('Open settings clicked');
    alert('Settings page');
}

function openFAQ() {
    console.log('Open FAQ clicked');
    alert('FAQ / Help Center');
}

function openTerms() {
    console.log('Open terms clicked');
    alert('Terms of Service');
}

function logout() {
    if (confirm('Are you sure you want to log out?')) {
        console.log('Logging out...');
        window.location.href = 'index.html';
    }
}
