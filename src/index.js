const express = require('express');
const syncRoutes = require('./routes/syncRoutes');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use('/sync', syncRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
