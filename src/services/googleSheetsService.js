const { google } = require('googleapis');
const sheets = google.sheets('v4');
const auth = require('../config/googleAuthConfig');

const updateGoogleSheet = async (rows) => {
    const values = rows.map((row) => [row.rowId, row.columnA, row.columnB]);
    const request = {
        spreadsheetId: process.env.SHEET_ID,
        range: 'Sheet1!A2',
        valueInputOption: 'RAW',
        resource: { values },
        auth: auth,
    };
    return await sheets.spreadsheets.values.update(request);
};

module.exports = { updateGoogleSheet };
