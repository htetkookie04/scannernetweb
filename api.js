// API Utility Functions using Fetch API
const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Check if API server is available
 * @returns {Promise<boolean>}
 */
async function checkAPIAvailable() {
    try {
        const response = await fetch(`${API_BASE_URL}/card-data`, {
            method: 'GET',
            signal: AbortSignal.timeout(2000) // 2 second timeout
        });
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * POST card data to the API
 * @param {Object} cardData - The business card data object
 * @returns {Promise<Object>} - Response from the API
 */
async function postCardData(cardData) {
    try {
        const response = await fetch(`${API_BASE_URL}/card-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
            signal: AbortSignal.timeout(10000) // 10 second timeout
        });

        if (!response.ok) {
            let errorMessage = 'Failed to save card data';
            try {
                const error = await response.json();
                errorMessage = error.error || errorMessage;
            } catch (e) {
                // If response is not JSON, use status text
                errorMessage = response.statusText || errorMessage;
            }
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting card data:', error);
        
        // Provide user-friendly error messages
        if (error.name === 'AbortError' || error.name === 'TypeError') {
            throw new Error('Cannot connect to server. Please make sure the API server is running on http://localhost:3000. Run "npm start" to start the server.');
        }
        
        throw error;
    }
}

/**
 * GET card data for a specific user
 * @param {string} userId - The user ID
 * @returns {Promise<Object>} - User's card data
 */
async function getCardData(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/card-data/${userId}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Card data not found');
            }
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch card data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching card data:', error);
        throw error;
    }
}

/**
 * Get userId from localStorage or generate a new one
 * @returns {string} - User ID
 */
function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('userId', userId);
    }
    return userId;
}

/**
 * Set userId in localStorage
 * @param {string} userId - The user ID to store
 */
function setUserId(userId) {
    localStorage.setItem('userId', userId);
}

