// Mock REST API Server for Business Card Data
// Run with: node server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'card-data.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ cards: [] }, null, 2));
}

// Helper function to read data
function readData() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { cards: [] };
    }
}

// Helper function to write data
function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET /api/card-data/:userId - Get card data for a specific user
app.get('/api/card-data/:userId', (req, res) => {
    const { userId } = req.params;
    const data = readData();
    
    const userCard = data.cards.find(card => card.userId === userId);
    
    if (!userCard) {
        return res.status(404).json({ error: 'Card data not found' });
    }
    
    res.json(userCard);
});

// POST /api/card-data - Create new card data
app.post('/api/card-data', (req, res) => {
    const cardData = req.body;
    
    // Validation
    const requiredFields = ['companyName', 'department', 'phone', 'email', 'jobTitle', 'address', 'websiteLink'];
    const missingFields = requiredFields.filter(field => !cardData[field]);
    
    if (missingFields.length > 0) {
        return res.status(400).json({ 
            error: 'Missing required fields', 
            missingFields 
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cardData.email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }
    
    // Generate userId if not provided (using email as base)
    const userId = cardData.userId || `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const newCard = {
        userId,
        ...cardData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    const data = readData();
    
    // Check if user already exists, update instead of create
    const existingIndex = data.cards.findIndex(card => card.userId === userId || card.email === cardData.email);
    
    if (existingIndex !== -1) {
        // Update existing
        data.cards[existingIndex] = {
            ...data.cards[existingIndex],
            ...newCard,
            updatedAt: new Date().toISOString()
        };
        writeData(data);
        return res.json({ 
            message: 'Card data updated successfully', 
            card: data.cards[existingIndex] 
        });
    } else {
        // Create new
        data.cards.push(newCard);
        writeData(data);
        return res.status(201).json({ 
            message: 'Card data created successfully', 
            card: newCard 
        });
    }
});

// GET /api/card-data - Get all card data (optional endpoint)
app.get('/api/card-data', (req, res) => {
    const data = readData();
    res.json(data.cards);
});

// Start server
app.listen(PORT, () => {
    console.log(`Mock API Server running on http://localhost:${PORT}`);
    console.log(`Endpoints:`);
    console.log(`  POST /api/card-data - Create/Update card data`);
    console.log(`  GET  /api/card-data/:userId - Get card data by userId`);
    console.log(`  GET  /api/card-data - Get all card data`);
});

