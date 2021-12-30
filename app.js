require('dotenv').config();
require('express-async-errors');

const express = require ('express');
const app = express();

// middlewares
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// db connection
const connectDB = require('./db/connect');

// routers
const productRouter = require('./routes/product');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">Product route</a>');
});

app.use('/api/v1/products', productRouter);

// product route

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001;

const start = async () => {
  try {

    await connectDB(process.env.MONGO_DB_URL);
    app.listen(port);
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.log(err);
  }
}

start();