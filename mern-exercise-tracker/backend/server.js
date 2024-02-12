const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = expres();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})