# ScannerNet - Business Card Web App

A modern, responsive web application for scanning and managing business cards with a mock REST API backend.

## Features

- **User Authentication**: Login/signup flow
- **Business Card Input**: Manual form entry with validation
- **Card Scanning**: UI for scanning business cards (camera interface)
- **Profile Management**: View and manage user profile
- **REST API**: Mock backend for data persistence

## Project Structure

```
cardoweb/
├── index.html          # Main entry point with login/flow screens
├── add-card.html       # Business card input form page
├── profile.html        # User profile display page
├── styles.css          # Global styles
├── script.js           # Main app logic
├── add-card.js         # Form validation and submission
├── profile.js          # Profile data loading
├── api.js              # API utility functions (Fetch API)
├── server.js           # Mock REST API server (Node.js/Express)
├── package.json        # Node.js dependencies
└── data/               # JSON data storage (created automatically)
    └── card-data.json  # Stored business card data
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing middleware

### 2. Start the API Server

```bash
npm start
```

The server will run on `http://localhost:3000`

### 3. Open the Application

Open `index.html` in your web browser, or use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

Then navigate to `http://localhost:8000`

## API Endpoints

### POST /api/card-data
Create or update business card data.

**Request Body:**
```json
{
  "companyName": "ITWIZARD",
  "department": "Software development",
  "phone": "+976 123456789",
  "email": "user@example.com",
  "jobTitle": "Project Manager",
  "address": "38, ZIRCA STREET, YANGON, MYANMAR",
  "websiteLink": "https://www.example.com",
  "userId": "user_1234567890_abc123"
}
```

**Response:**
```json
{
  "message": "Card data created successfully",
  "card": { ... }
}
```

### GET /api/card-data/:userId
Get business card data for a specific user.

**Response:**
```json
{
  "userId": "user_1234567890_abc123",
  "companyName": "ITWIZARD",
  "department": "Software development",
  "phone": "+976 123456789",
  "email": "user@example.com",
  "jobTitle": "Project Manager",
  "address": "38, ZIRCA STREET, YANGON, MYANMAR",
  "websiteLink": "https://www.example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Pages

### 1. Login Flow (`index.html`)
- Entry screen with login/signup options
- Email login form
- Welcome screen
- User selection (Scan vs Manual input)

### 2. Add Card (`add-card.html`)
- Business card input form
- Client-side validation
- Image upload placeholder
- POST data to `/api/card-data`

### 3. Profile (`profile.html`)
- Display user profile information
- Menu options (Card Info, Settings, FAQ, Logout)
- Bottom navigation bar
- GET data from `/api/card-data/:userId`

## Form Validation

The add-card form includes client-side validation for:
- **Required fields**: All fields are required
- **Email format**: Validates email address format
- **Phone number**: Validates phone number format
- **Website URL**: Validates and normalizes URLs (adds https:// if missing)

## Data Persistence

Data is stored in `data/card-data.json` as JSON. The file is created automatically when the server starts.

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **API**: Fetch API for HTTP requests
- **Storage**: JSON file-based storage (can be easily replaced with MongoDB, Firebase, etc.)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interface

## Development Notes

- The API base URL is set in `api.js` as `http://localhost:3000/api`
- User ID is stored in localStorage for session management
- All API calls use the Fetch API
- Form validation happens both client-side and server-side

## Future Enhancements

- Replace JSON storage with MongoDB or Firebase
- Add image upload functionality
- Implement actual card scanning with OCR
- Add user authentication with JWT tokens
- Add more profile customization options

# scannernetweb
