const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./database/connect.js');

const app = express();
const routers = require("./routers/routers.js");
const { getQuestions, insertQuestions, deleteQuestions, getResult, postResult, deleteResult } = require('./controllers/controllers.js');


dotenv.config({ path: '.env' });

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routers);

app.get('/', (req, res) => {
    res.json("Server started");
});

// Establish database connection and start server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Error connecting to the database:", err);
    });
