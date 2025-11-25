// My Cards page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cardItems = document.querySelectorAll('.card-item');

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterCards(searchTerm);
        });
    }

    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    function filterCards(searchTerm) {
        cardItems.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const company = card.getAttribute('data-company').toLowerCase();
            
            if (name.includes(searchTerm) || company.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function applyFilter(filter) {
        const searchTerm = searchInput.value.toLowerCase();
        
        cardItems.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (filter === 'recent') {
                // Show first 3 as recent
                const index = Array.from(cardItems).indexOf(card);
                card.style.display = index < 3 ? 'block' : 'none';
            } else if (filter === 'company') {
                card.style.display = 'block';
            } else if (filter === 'name') {
                card.style.display = 'block';
            }
            
            // Apply search filter if there's a search term
            if (searchTerm) {
                filterCards(searchTerm);
            }
        });
    }

    // Card click functionality
    cardItems.forEach(card => {
        card.addEventListener('click', function() {
            // Navigate to card detail page or show card details
            console.log('Card clicked:', this.querySelector('.card-name').textContent);
        });
    });
});

function closePremiumBanner() {
    const banner = document.getElementById('premiumBanner');
    if (banner) {
        banner.style.display = 'none';
    }
}

