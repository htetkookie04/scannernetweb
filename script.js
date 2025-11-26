// Hardcoded credentials
const VALID_EMAIL = 'naryaal@gmail.com';
const VALID_PASSWORD = 'pass@123';

// Language translations
const translations = {
    en: {
        // Screen 1
        'create_account': 'Create your <br/> Scanner Net account',
        'sign_up': 'Sign up',
        'log_in': 'Log in',
        'or_login_with': 'Or login with',
        'google': 'Google',
        'facebook': 'Facebook',
        'terms_footer': 'By continuing you accept our <a href="#" class="link">Terms of Service</a> and <a href="#" class="link">Privacy Policy</a>.',
        
        // Screen 2
        'login_with_email': 'login with email',
        'login_title': 'Log in to your account',
        'login_subtitle': 'Enter your email address to verify your account.',
        'email': 'Email',
        'email_placeholder': 'Email address',
        'password': 'Password',
        'password_placeholder': 'Password',
        'terms_checkbox': 'By continuing you accept our <a href="#" class="link">Terms of Service</a> and <a href="#" class="link">Privacy Policy</a>.',
        
        // Screen 3
        'welcome_title': 'Congratulation!<br/>Welcome to ScannerNet',
        'welcome_subtitle': 'We are happy to have you. It\'s time to search,<br/>scan business card.',
        'continue': 'Continue',
        
        // Screen 5
        'select_user': 'Select User',
        'scan_card_title': 'Scan Your Business Card',
        'scan_card_desc': 'Use your camera to scan your ID.',
        'manual_title': 'Type manual Information',
        'manual_desc': 'Fill in your details manually below.',
        
        // Screen 6
        'scan_visiting_card': 'Scan a Visiting Card',
        'scan_subtitle': 'Hold the code inside the frame, it will be scanned automatically',
        
        // Screen 7
        'add_card_info': 'Add your business card info',
        'enter_card_info': 'Enter your card info in the box below.',
        'add_card_image': 'Add Business Card Image',
        'company_name': 'Company name',
        'department': 'Department',
        'phone': 'Phone',
        'job_title': 'Job title',
        'address': 'Address',
        'website_link': 'Website link',
        
        // Screen 8
        'card_saved': 'Card Saved Successfully!',
        'card_saved_msg': 'Your business card information has been saved.',
        'company': 'Company:',
        'name': 'Name:',
        'job': 'Job Title:',
        'view_profile': 'View Profile',
        'add_another': 'Add Another Card',
        
        // Alerts
        'sign_up_soon': 'Sign up functionality coming soon!',
        'select_option': 'Please select an option',
        'login_success': 'Login Successful! Welcome, Naryaal.',
        'terms_required': 'Please accept the Terms of Service and Privacy Policy to continue.',
        'valid_email': 'Please enter a valid email address.',
        'enter_password': 'Please enter your password.',
        'invalid_credentials': 'Invalid Email or Password.'
    },
    my: {
        // Screen 1
        'create_account': 'သင့်အကောင့်<br/>ဖန်တီးပါ',
        'sign_up': 'အကောင့်ဖွင့်မည်',
        'log_in': 'ဝင်ရောက်မည်',
        'or_login_with': 'သို့မဟုတ် ဝင်ရောက်ရန်',
        'google': 'Google',
        'facebook': 'Facebook',
        'terms_footer': 'ဆက်လက်ဆောင်ရွက်ခြင်းဖြင့် သင်သည် ကျွန်ုပ်တို့၏ <a href="#" class="link">ဝန်ဆောင်မှုစည်းမျဉ်း</a> နှင့် <a href="#" class="link">ကိုယ်ရေးအချက်အလက်မူဝါဒ</a> ကို လက်ခံပါသည်။',
        
        // Screen 2
        'login_with_email': 'အီးမေးလ်ဖြင့် ဝင်ရောက်မည်',
        'login_title': 'သင့်အကောင့်သို့ ဝင်ရောက်ပါ',
        'login_subtitle': 'သင့်အကောင့်ကို အတည်ပြုရန် အီးမေးလ်လိပ်စာ ထည့်ပါ။',
        'email': 'အီးမေးလ်',
        'email_placeholder': 'အီးမေးလ်လိပ်စာ',
        'password': 'လျှို့ဝှက်နံပါတ်',
        'password_placeholder': 'လျှို့ဝှက်နံပါတ်',
        'terms_checkbox': 'ဆက်လက်ဆောင်ရွက်ခြင်းဖြင့် သင်သည် ကျွန်ုပ်တို့၏ <a href="#" class="link">ဝန်ဆောင်မှုစည်းမျဉ်း</a> နှင့် <a href="#" class="link">ကိုယ်ရေးအချက်အလက်မူဝါဒ</a> ကို လက်ခံပါသည်။',
        
        // Screen 3
        'welcome_title': 'ဂုဏ်ယူပါတယ်!<br/>ScannerNet သို့ကြိုဆိုပါသည်',
        'welcome_subtitle': 'သင့်အား လက်ခံရ၍ ဝမ်းသာပါသည်။ စီးပွားရေးကတ်များ ရှာဖွေ<br/>စကင်န်ဖတ်ရန် အချိန်တန်ပါပြီ။',
        'continue': 'ဆက်လုပ်မည်',
        
        // Screen 5
        'select_user': 'အသုံးပြုသူရွေးချယ်ရန်',
        'scan_card_title': 'သင့်စီးပွားရေးကတ်ကို စကင်န်ဖတ်ပါ',
        'scan_card_desc': 'သင့်မှတ်ပုံတင်ကို စကင်န်ဖတ်ရန် ကင်မရာကို အသုံးပြုပါ။',
        'manual_title': 'အချက်အလက်များကို ကိုယ်တိုင်ရိုက်ထည့်မည်',
        'manual_desc': 'အသေးစိတ်အချက်အလက်များကို အောက်တွင် ဖြည့်ပါ။',
        
        // Screen 6
        'scan_visiting_card': 'ဧည့်သည်ကတ်ကို စကင်န်ဖတ်ပါ',
        'scan_subtitle': 'ကုဒ်ကို ဘောင်အတွင်းတွင် ထားပါ၊ အလိုအလျောက် စကင်န်ဖတ်လိမ့်မည်',
        
        // Screen 7
        'add_card_info': 'သင့်စီးပွားရေးကတ်အချက်အလက်များထည့်ပါ',
        'enter_card_info': 'သင့်ကတ်အချက်အလက်များကို အောက်ဘောက်စ်တွင် ထည့်ပါ။',
        'add_card_image': 'စီးပွားရေးကတ်ပုံထည့်ပါ',
        'company_name': 'ကုမ္ပဏီအမည်',
        'department': 'ဌာန',
        'phone': 'ဖုန်းနံပါတ်',
        'job_title': 'ရာထူး',
        'address': 'လိပ်စာ',
        'website_link': 'ဝက်ဘ်ဆိုက်လင့်',
        
        // Screen 8
        'card_saved': 'ကတ်သိမ်းဆည်းပြီးပါပြီ!',
        'card_saved_msg': 'သင့်စီးပွားရေးကတ်အချက်အလက်များ သိမ်းဆည်းပြီးပါပြီ။',
        'company': 'ကုမ္ပဏီ:',
        'name': 'အမည်:',
        'job': 'ရာထူး:',
        'view_profile': 'ပရိုဖိုင်ကြည့်မည်',
        'add_another': 'နောက်ထပ်ကတ်ထည့်မည်',
        
        // Alerts
        'sign_up_soon': 'အကောင့်ဖွင့်ခြင်းလုပ်ဆောင်ချက် မကြာမီ ရရှိမည်!',
        'select_option': 'ရွေးချယ်မှုတစ်ခု ရွေးပါ',
        'login_success': 'အောင်မြင်စွာဝင်ရောက်ပြီး! ကြိုဆိုပါတယ်၊ Naryaal။',
        'terms_required': 'ဆက်လုပ်ရန် ဝန်ဆောင်မှုစည်းမျဉ်းနှင့် ကိုယ်ရေးအချက်အလက်မူဝါဒကို လက်ခံပါ။',
        'valid_email': 'တရားဝင်အီးမေးလ်လိပ်စာ ထည့်ပါ။',
        'enter_password': 'သင့်လျှို့ဝှက်နံပါတ် ထည့်ပါ။',
        'invalid_credentials': 'အီးမေးလ် သို့မဟုတ် လျှို့ဝှက်နံပါတ် မမှန်ကန်ပါ။'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Screen navigation
function showLogin() {
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    
    screen1.classList.remove('active');
    screen2.classList.add('active');
}

function showSignUp() {
    // Placeholder for sign up functionality
    alert(translations[currentLanguage]['sign_up_soon']);
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
        showErrorMessage(translations[currentLanguage]['terms_required']);
        return;
    }
    
    // Validate email format
    if (!email || !email.includes('@')) {
        showErrorMessage(translations[currentLanguage]['valid_email']);
        return;
    }
    
    // Validate password
    if (!password) {
        showErrorMessage(translations[currentLanguage]['enter_password']);
        return;
    }
    
    // Check credentials
    const isEmailMatch = email.toLowerCase() === VALID_EMAIL.toLowerCase();
    const isPasswordMatch = password === VALID_PASSWORD;
    
    if (isEmailMatch && isPasswordMatch) {
        // Success - show alert
        alert(translations[currentLanguage]['login_success']);
        
        // Hide login screens and show welcome screen
        const screen1 = document.getElementById('screen1');
        const screen2 = document.getElementById('screen2');
        const screen3 = document.getElementById('screen3');
        
        if (screen1) screen1.classList.remove('active');
        if (screen2) screen2.classList.remove('active');
        if (screen3) screen3.classList.add('active');
    } else {
        // Failure - show error message
        showErrorMessage(translations[currentLanguage]['invalid_credentials']);
    }
}

// Language icon update and translation
function updateLanguageIcon() {
    const languageSelect = document.getElementById('languageSelect');
    const globeIcon = document.getElementById('globeIcon');
    const selectedLanguage = languageSelect.value;
    
    // Keep globe icon for all languages (universal symbol)
    globeIcon.textContent = '🌐';
    
    // Update current language
    currentLanguage = selectedLanguage;
    localStorage.setItem('language', selectedLanguage);
    
    // Apply translations
    applyTranslations();
}

// Apply translations to all elements
function applyTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });
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
        alert(translations[currentLanguage]['select_option']);
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
    
    // Initialize language from localStorage
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Apply initial translations
    applyTranslations();
    
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
