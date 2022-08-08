// const path = require('path');

const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.use(cors({ origin: true, credentials: true }));

app.listen(port, () => console.log(`Server started on port ${port}`));
