const express = require('express');
const { syncSheetToDb, syncDbToSheet } = require('../controllers/syncController');

// Initialize router
const router = express.Router();

// Route to handle syncing data from Google Sheets to PostgreSQL
router.post('/sheet-to-db', syncSheetToDb);

// Route to handle syncing data from PostgreSQL to Google Sheets
router.post('/db-to-sheet', syncDbToSheet);

module.exports = router;
