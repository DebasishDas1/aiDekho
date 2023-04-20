// Import necessary packages and middleware
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";

import aIToolRouter from './routes/aIToolRouter.js';
import feedbackRouter from './routes/feedbackRouter.js';
import userRouter from './routes/userRouter.js';

// Create an Express app instance
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: '30MB', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30MB', extended: true }));

// Define the routes using their respective middleware functions
app.use('/aiTool', aIToolRouter);
app.use('/feedback', feedbackRouter);
app.use('/user', userRouter);

// Define a catch-all route that returns a "not found" error message for any other paths
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Define an error-handling middleware function that returns an error response
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});

// Define the MongoDB connection URL and the server port number
const mongo_url = 'mongodb+srv://debasish:debasish123@cluster0.dyhkoei.mongodb.net/test';
const PORT = process.env.PORT || 9000;

// Connect to the MongoDB database and start the server
const connectDataBase = async () => {
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

connectDataBase();

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
