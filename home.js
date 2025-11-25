// Home page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Handle search button click
    const searchBtn = document.querySelector('.header-icons .icon-btn:first-child');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            console.log('Search clicked');
            // Add search functionality here
        });
    }

    // Handle notification button click
    const notificationBtn = document.querySelector('.header-icons .icon-btn:last-child');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            console.log('Notifications clicked');
            // Add notification functionality here
        });
    }

    // Handle category item clicks
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryLabel = this.querySelector('.category-label').textContent;
            console.log('Category clicked:', categoryLabel);
            // Add category filter functionality here
        });
    });

    // Handle connect button clicks
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const profileCard = this.closest('.profile-card-item');
            const profileName = profileCard.querySelector('.profile-name').textContent;
            console.log('Connect clicked for:', profileName);
            
            // Update button state
            if (this.textContent.includes('Connect')) {
                this.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 11l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    Connected
                `;
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                this.style.color = '#ffffff';
            }
        });
    });

    // Handle FAB (Floating Action Button) click
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            console.log('FAB clicked');
            // Navigate to scan card page
            window.location.href = 'scan-card.html';
        });
    }

    // Handle view all link
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View all clicked');
            // Navigate to full feed page
        });
    }
});

