// Form validation and submission handler for Add Card page

// Validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateURL(url) {
    try {
        // Add http:// if no protocol is specified
        const urlWithProtocol = url.startsWith('http://') || url.startsWith('https://') 
            ? url 
            : `https://${url}`;
        new URL(urlWithProtocol);
        return true;
    } catch {
        return false;
    }
}

function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    if (inputElement) {
        inputElement.style.borderColor = '#ef4444';
    }
}

function clearFieldError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    if (inputElement) {
        inputElement.style.borderColor = '#e5e7eb';
    }
}

function showFormMessage(message, isError = false) {
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${isError ? 'form-message-error' : 'form-message-success'}`;
        messageElement.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

function validateForm() {
    let isValid = true;
    
    // Get form values
    const companyName = document.getElementById('companyName')?.value.trim() || '';
    const department = document.getElementById('department')?.value.trim() || '';
    const phoneCode = document.getElementById('phoneCode')?.value.trim() || '';
    const phoneNumber = document.getElementById('phoneNumber')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const jobTitle = document.getElementById('jobTitle')?.value.trim() || '';
    const address = document.getElementById('address')?.value.trim() || '';
    const websiteLink = document.getElementById('websiteLink')?.value.trim() || '';
    
    console.log('Validating form:', { companyName, department, phoneCode, phoneNumber, email, jobTitle, address, websiteLink });
    
    // Clear all errors
    ['companyName', 'department', 'phone', 'email', 'jobTitle', 'address', 'websiteLink'].forEach(clearFieldError);
    
    // Validate Company Name
    if (!companyName) {
        showFieldError('companyName', 'Company name is required');
        isValid = false;
    }
    
    // Validate Department
    if (!department) {
        showFieldError('department', 'Department is required');
        isValid = false;
    }
    
    // Validate Phone
    if (!phoneCode || !phoneNumber) {
        showFieldError('phone', 'Phone number is required');
        isValid = false;
    } else {
        const fullPhone = phoneCode + phoneNumber;
        if (!validatePhone(fullPhone)) {
            showFieldError('phone', 'Please enter a valid phone number');
            isValid = false;
        }
    }
    
    // Validate Email
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Job Title
    if (!jobTitle) {
        showFieldError('jobTitle', 'Job title is required');
        isValid = false;
    }
    
    // Validate Address
    if (!address) {
        showFieldError('address', 'Address is required');
        isValid = false;
    }
    
    // Validate Website Link
    if (!websiteLink) {
        showFieldError('websiteLink', 'Website link is required');
        isValid = false;
    } else {
        // Normalize URL - add protocol if missing
        const normalizedUrl = websiteLink.startsWith('http://') || websiteLink.startsWith('https://') 
            ? websiteLink 
            : `https://${websiteLink}`;
        
        if (!validateURL(normalizedUrl)) {
            showFieldError('websiteLink', 'Please enter a valid website URL');
            isValid = false;
        } else {
            // Update the input with normalized URL
            const websiteInput = document.getElementById('websiteLink');
            if (websiteInput) {
                websiteInput.value = normalizedUrl;
            }
        }
    }
    
    console.log('Form validation result:', isValid);
    return isValid;
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    // Hide previous messages
    document.getElementById('formMessage').style.display = 'none';
    
    // Validate form
    if (!validateForm()) {
        showFormMessage('Please fix the errors in the form', true);
        return;
    }
    
    // Get form values
    let websiteLink = document.getElementById('websiteLink').value.trim();
    // Normalize URL
    if (websiteLink && !websiteLink.startsWith('http://') && !websiteLink.startsWith('https://')) {
        websiteLink = `https://${websiteLink}`;
    }
    
    const formData = {
        companyName: document.getElementById('companyName').value.trim(),
        department: document.getElementById('department').value.trim(),
        phone: document.getElementById('phoneCode').value.trim() + ' ' + document.getElementById('phoneNumber').value.trim(),
        email: document.getElementById('email').value.trim(),
        jobTitle: document.getElementById('jobTitle').value.trim(),
        address: document.getElementById('address').value.trim(),
        websiteLink: websiteLink,
        userId: getUserId()
    };
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    const submitBtnLoader = document.getElementById('submitBtnLoader');
    
    submitBtn.disabled = true;
    submitBtnText.style.display = 'none';
    submitBtnLoader.style.display = 'inline';
    
    try {
        console.log('Submitting form data:', formData);
        
        // Post data to API
        const response = await postCardData(formData);
        
        console.log('API response:', response);
        
        // Store userId if returned
        if (response.card && response.card.userId) {
            setUserId(response.card.userId);
        }
        
        // Show success screen (second screen) immediately
        showSuccessScreen(formData);
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Error - show user-friendly message
        let errorMessage = error.message || 'Failed to save card data. Please try again.';
        
        // Check if it's a connection error
        const isConnectionError = errorMessage.includes('Cannot connect') || 
                                 errorMessage.includes('Failed to fetch') ||
                                 errorMessage.includes('network') ||
                                 error.name === 'TypeError' ||
                                 errorMessage.toLowerCase().includes('cors');
        
        if (isConnectionError) {
            // For testing/demo purposes, show success screen even if API fails
            console.warn('API connection failed, but showing success screen for demo purposes');
            
            // Save to localStorage as fallback
            try {
                const savedCards = JSON.parse(localStorage.getItem('savedCards') || '[]');
                savedCards.push({
                    ...formData,
                    savedAt: new Date().toISOString()
                });
                localStorage.setItem('savedCards', JSON.stringify(savedCards));
                console.log('Data saved to localStorage as fallback');
            } catch (e) {
                console.error('Failed to save to localStorage:', e);
            }
            
            // Show success screen immediately (no alert)
            showSuccessScreen(formData);
        } else {
            // For other errors (validation, etc.), show error message
            showFormMessage(errorMessage, true);
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtnText.style.display = 'inline';
            submitBtnLoader.style.display = 'none';
            
            // Scroll to error message
            const messageElement = document.getElementById('formMessage');
            if (messageElement) {
                messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
}

// Image upload handler
function handleImageUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const uploadedImage = document.getElementById('uploadedImage');
                const uploadPlaceholder = document.getElementById('uploadPlaceholder');
                
                uploadedImage.src = event.target.result;
                uploadedImage.style.display = 'block';
                uploadPlaceholder.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Show success screen (second screen)
function showSuccessScreen(formData) {
    try {
        const addCardScreen = document.getElementById('addCardScreen');
        const successScreen = document.getElementById('successScreen');
        
        console.log('Showing success screen', { addCardScreen: !!addCardScreen, successScreen: !!successScreen });
        
        if (!addCardScreen || !successScreen) {
            console.error('Missing screen elements:', { addCardScreen, successScreen });
            alert('Error: Could not find screen elements. Please refresh the page.');
            return;
        }
        
        // Hide form screen
        addCardScreen.classList.remove('active');
        
        // Show success screen
        successScreen.classList.add('active');
        
        // Populate preview data
        const previewCompany = document.getElementById('previewCompany');
        const previewName = document.getElementById('previewName');
        const previewJob = document.getElementById('previewJob');
        const previewEmail = document.getElementById('previewEmail');
        
        if (previewCompany) previewCompany.textContent = formData.companyName || '-';
        if (previewName) previewName.textContent = formData.email?.split('@')[0] || '-';
        if (previewJob) previewJob.textContent = formData.jobTitle || '-';
        if (previewEmail) previewEmail.textContent = formData.email || '-';
        
        // Reset button state
        const submitBtn = document.getElementById('submitBtn');
        const submitBtnText = document.getElementById('submitBtnText');
        const submitBtnLoader = document.getElementById('submitBtnLoader');
        
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.style.display = 'inline';
        if (submitBtnLoader) submitBtnLoader.style.display = 'none';
        
        console.log('Success screen shown successfully');
    } catch (error) {
        console.error('Error showing success screen:', error);
        alert('Error showing success screen: ' + error.message);
    }
}

// Go back to form screen
function goBackToForm() {
    const addCardScreen = document.getElementById('addCardScreen');
    const successScreen = document.getElementById('successScreen');
    
    if (addCardScreen && successScreen) {
        successScreen.classList.remove('active');
        addCardScreen.classList.add('active');
    }
}

// Go to profile page
function goToProfile() {
    const userId = getUserId();
    window.location.href = `profile.html?userId=${userId}`;
}

// Add another card
function addAnotherCard() {
    const addCardScreen = document.getElementById('addCardScreen');
    const successScreen = document.getElementById('successScreen');
    const form = document.getElementById('cardForm');
    
    if (addCardScreen && successScreen && form) {
        // Reset form
        form.reset();
        
        // Reset image upload
        const uploadedImage = document.getElementById('uploadedImage');
        const uploadPlaceholder = document.getElementById('uploadPlaceholder');
        if (uploadedImage && uploadPlaceholder) {
            uploadedImage.style.display = 'none';
            uploadPlaceholder.style.display = 'flex';
        }
        
        // Clear all errors
        document.querySelectorAll('.error-text').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        
        // Hide form message
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.style.display = 'none';
        }
        
        // Go back to form screen
        successScreen.classList.remove('active');
        addCardScreen.classList.add('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Go back function
function goBack() {
    const successScreen = document.getElementById('successScreen');
    
    // If on success screen, go back to form
    if (successScreen && successScreen.classList.contains('active')) {
        goBackToForm();
    } else {
        // Otherwise go back to previous page
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = 'index.html';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cardForm');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Image upload
    if (uploadPlaceholder) {
        uploadPlaceholder.addEventListener('click', handleImageUpload);
    }
    
    // Enable/disable submit button based on form validity
    function updateSubmitButton() {
        const submitBtn = document.getElementById('submitBtn');
        if (!submitBtn) return;
        
        const inputs = form.querySelectorAll('input[required]');
        let allFilled = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        
        submitBtn.disabled = !allFilled;
        if (allFilled) {
            submitBtn.classList.remove('btn-continue-disabled');
        } else {
            submitBtn.classList.add('btn-continue-disabled');
        }
    }
    
    // Real-time validation on blur
    if (form) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                // Only validate the specific field that lost focus
                const fieldId = input.id;
                const value = input.value.trim();
                
                // Clear error when user starts typing
                clearFieldError(fieldId);
                
                // Validate on blur only if field has value
                if (value) {
                    // Quick validation for specific fields
                    if (fieldId === 'email' && value && !validateEmail(value)) {
                        showFieldError('email', 'Please enter a valid email address');
                    } else if (fieldId === 'websiteLink' && value) {
                        const normalizedUrl = value.startsWith('http://') || value.startsWith('https://') 
                            ? value 
                            : `https://${value}`;
                        if (!validateURL(normalizedUrl)) {
                            showFieldError('websiteLink', 'Please enter a valid website URL');
                        }
                    }
                }
                
                updateSubmitButton();
            });
            
            input.addEventListener('input', function() {
                clearFieldError(input.id);
                updateSubmitButton();
            });
        });
        
        // Initial button state
        updateSubmitButton();
    }
    
    // Check API availability on load (optional - just for info)
    if (typeof checkAPIAvailable === 'function') {
        checkAPIAvailable().then(isAvailable => {
            if (!isAvailable) {
                console.warn('API server is not available. Make sure to run "npm start" to start the server.');
            }
        }).catch(() => {
            // Silently fail - API check is optional
        });
    }
});

