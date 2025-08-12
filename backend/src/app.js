const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoute');
const errorHandler = require('./Middlewares/errorHandlers');
const { createContactTable } = require('./models/contactModel');

const app = express();

app.use(cors());
app.use(express.json());

// Create table
createContactTable();

// Routes
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

module.exports = app;
