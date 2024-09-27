const prismaService = require('../services/prismaService');
const googleSheetsService = require('../services/googleSheetsService');

// Sync data from Google Sheets to PostgreSQL
const syncSheetToDb = async (req, res) => {
    const data = req.body;
    try {
        const result = await prismaService.upsertSheetData(data);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error syncing data to the database' });
    }
};

// Sync data from PostgreSQL to Google Sheets
const syncDbToSheet = async (req, res) => {
    try {
        const rows = await prismaService.getAllSheetData();
        await googleSheetsService.updateGoogleSheet(rows);
        res.json({ message: 'Data synced to Google Sheets' });
    } catch (error) {
        res.status(500).json({ error: 'Error syncing data to Google Sheets' });
    }
};

module.exports = { syncSheetToDb, syncDbToSheet };
