# Quick Start Guide

## Getting the Add Card Page to Work

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the API Server
Open a terminal and run:
```bash
npm start
```

You should see:
```
Mock API Server running on http://localhost:3000
```

**Keep this terminal window open** - the server needs to keep running.

### Step 3: Open the Add Card Page

You have two options:

**Option A: Direct File Open**
- Simply open `add-card.html` in your web browser
- Note: Some browsers may have CORS restrictions

**Option B: Use a Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js http-server
npx http-server -p 8000
```

Then open: `http://localhost:8000/add-card.html`

### Step 4: Fill Out the Form

1. Fill in all required fields:
   - Company name
   - Department
   - Phone (country code + number)
   - Email
   - Job title
   - Address
   - Website link

2. Optionally upload a business card image

3. Click "Continue"

### Troubleshooting

**Problem: "Cannot connect to server" error**
- Solution: Make sure the API server is running (Step 2)
- Check that port 3000 is not being used by another application

**Problem: Form button is disabled**
- Solution: Fill in all required fields (marked with *)

**Problem: Validation errors**
- Make sure email is in valid format (e.g., user@example.com)
- Make sure website URL is valid (e.g., www.example.com or https://example.com)
- Make sure phone number is entered

**Problem: CORS errors in browser console**
- Solution: Use Option B (local server) instead of opening file directly

### Testing the API

You can test if the API is working by opening:
```
http://localhost:3000/api/card-data
```

This should return an empty array `[]` if no data has been saved yet.

### Next Steps

After successfully submitting the form:
- You'll be redirected to `profile.html` to see your saved data
- Data is stored in `data/card-data.json`

