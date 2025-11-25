// Hardcoded credentials
const VALID_EMAIL = 'naryaal@example.com';
const VALID_PASSWORD = 'Pass@123';

// Screen navigation
function showLogin() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    screen1.classList.remove('active');
    screen2.classList.add('active');
}

function showSignUp() {
    // Placeholder for sign up functionality
    alert('Sign up functionality coming soon!');
}

function goBack() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    screen2.classList.remove('active');
    screen1.classList.add('active');
    
    // Clear form and error message
    document.getElementById('loginForm').reset();
    hideErrorMessage();
}

// Password toggle
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁';
    }
}

// Error message handling
function showErrorMessage(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function hideErrorMessage() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';
}

// Login form validation and authentication
function handleLogin(event) {
    event.preventDefault();
    
    // Hide any previous error messages
    hideErrorMessage();
    
    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('termsCheck').checked;
    
    // Validate terms checkbox
    if (!termsChecked) {
        showErrorMessage('Please accept the Terms of Service and Privacy Policy to continue.');
        return;
    }
    
    // Validate email format
    if (!email || !email.includes('@')) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    // Validate password
    if (!password) {
        showErrorMessage('Please enter your password.');
        return;
    }
    
    // Check credentials
    const isEmailMatch = email.toLowerCase() === VALID_EMAIL.toLowerCase();
    const isPasswordMatch = password === VALID_PASSWORD;
    
    if (isEmailMatch && isPasswordMatch) {
        // Success - show alert
        alert('Login Successful! Welcome, Naryaal.');
        
        // Hide login screens and show welcome screen
        const screen1 = document.getElementById('screen1');
        const screen2 = document.getElementById('screen2');
        const screen3 = document.getElementById('screen3');
        
        if (screen1) screen1.classList.remove('active');
        if (screen2) screen2.classList.remove('active');
        if (screen3) screen3.classList.add('active');
    } else {
        // Failure - show error message
        showErrorMessage('Invalid Email or Password.');
    }
}

// Language icon update
function updateLanguageIcon() {
    const languageSelect = document.getElementById('languageSelect');
    const globeIcon = document.getElementById('globeIcon');
    const selectedLanguage = languageSelect.value;
    
    // Keep globe icon for all languages (universal symbol)
    // You can customize this to show different icons for different languages if needed
    globeIcon.textContent = '🌐';
    
    // Optional: Change icon based on language
    // if (selectedLanguage === 'en') {
    //     globeIcon.textContent = '🌐';
    // } else if (selectedLanguage === 'my') {
    //     globeIcon.textContent = '🌐';
    // }
}

// Continue to app function - shows Select User screen
function continueToApp() {
    const screen3 = document.getElementById('screen3');
    const screen5 = document.getElementById('screen5');
    
    if (screen3) screen3.classList.remove('active');
    if (screen5) screen5.classList.add('active');
}

// Go back to welcome screen
function goBackToWelcome() {
    const screen3 = document.getElementById('screen3');
    const screen5 = document.getElementById('screen5');
    
    if (screen5) screen5.classList.remove('active');
    if (screen3) screen3.classList.add('active');
}

// Complete flow - navigate based on selection
function completeFlow() {
    const selectedOption = document.querySelector('input[name="userOption"]:checked');
    
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }
    
    const screen5 = document.getElementById('screen5');
    const screen6 = document.getElementById('screen6');
    const screen7 = document.getElementById('screen7');
    
    if (selectedOption.value === 'scan') {
        // Show scan screen
        if (screen5) screen5.classList.remove('active');
        if (screen6) screen6.classList.add('active');
        if (screen7) screen7.classList.remove('active');
    } else if (selectedOption.value === 'manual') {
        // Show manual input screen
        if (screen5) screen5.classList.remove('active');
        if (screen6) screen6.classList.remove('active');
        if (screen7) screen7.classList.add('active');
    }
}

// Go back to Select User screen
function goBackToSelectUser() {
    const screen5 = document.getElementById('screen5');
    const screen6 = document.getElementById('screen6');
    const screen7 = document.getElementById('screen7');
    
    if (screen6) screen6.classList.remove('active');
    if (screen7) screen7.classList.remove('active');
    if (screen5) screen5.classList.add('active');
}

// Show success screen from form (screen8)
function showSuccessScreenFromForm(formData) {
    const screen7 = document.getElementById('screen7');
    const screen8 = document.getElementById('screen8');
    
    if (screen7 && screen8) {
        // Hide form screen
        screen7.classList.remove('active');
        
        // Show success screen
        screen8.classList.add('active');
        
        // Populate preview data
        const previewCompany = document.getElementById('previewCompanyScreen8');
        const previewName = document.getElementById('previewNameScreen8');
        const previewJob = document.getElementById('previewJobScreen8');
        const previewEmail = document.getElementById('previewEmailScreen8');
        
        if (previewCompany) previewCompany.textContent = formData.companyName || '-';
        if (previewName) previewName.textContent = formData.email?.split('@')[0] || '-';
        if (previewJob) previewJob.textContent = formData.jobTitle || '-';
        if (previewEmail) previewEmail.textContent = formData.email || '-';
    }
}

// Go back to form screen
function goBackToFormScreen() {
    const screen7 = document.getElementById('screen7');
    const screen8 = document.getElementById('screen8');
    
    if (screen7 && screen8) {
        screen8.classList.remove('active');
        screen7.classList.add('active');
    }
}

// Go to profile page from success
function goToProfileFromSuccess() {
    window.location.href = 'profile.html';
}

// Add another card from success
function addAnotherCardFromSuccess() {
    const screen7 = document.getElementById('screen7');
    const screen8 = document.getElementById('screen8');
    const form = document.getElementById('manualForm');
    
    if (screen7 && screen8 && form) {
        // Reset form
        form.reset();
        
        // Go back to form screen
        screen8.classList.remove('active');
        screen7.classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Initialize - ensure only screen 1 is visible on load
document.addEventListener('DOMContentLoaded', function() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const screen5 = document.getElementById('screen5');
    const screen6 = document.getElementById('screen6');
    const screen7 = document.getElementById('screen7');
    const screen8 = document.getElementById('screen8');
    
    if (screen1) screen1.classList.add('active');
    if (screen2) screen2.classList.remove('active');
    if (screen3) screen3.classList.remove('active');
    if (screen5) screen5.classList.remove('active');
    if (screen6) screen6.classList.remove('active');
    if (screen7) screen7.classList.remove('active');
    if (screen8) screen8.classList.remove('active');
    
    // Initialize language icon
    updateLanguageIcon();
    
    // Enable continue button when form fields are filled
    const manualForm = document.getElementById('manualForm');
    if (manualForm) {
        const inputs = manualForm.querySelectorAll('input');
        const continueBtn = document.getElementById('continueBtn');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                checkFormValidity();
            });
        });
        
        function checkFormValidity() {
            let hasValue = false;
            inputs.forEach(input => {
                if (input.value.trim() !== '') {
                    hasValue = true;
                }
            });
            
            if (continueBtn) {
                if (hasValue) {
                    continueBtn.disabled = false;
                    continueBtn.classList.remove('btn-continue-disabled');
                } else {
                    continueBtn.disabled = true;
                    continueBtn.classList.add('btn-continue-disabled');
                }
            }
        }
        
        manualForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                companyName: document.getElementById('companyName').value.trim(),
                department: document.getElementById('department').value.trim(),
                phone: document.getElementById('phoneCode').value.trim() + ' ' + document.getElementById('phoneNumber').value.trim(),
                email: document.getElementById('emailManual').value.trim(),
                jobTitle: document.getElementById('jobTitle').value.trim(),
                address: document.getElementById('address').value.trim(),
                websiteLink: document.getElementById('website').value.trim()
            };
            
            // Show success screen (screen8)
            showSuccessScreenFromForm(formData);
        });
    }
});
