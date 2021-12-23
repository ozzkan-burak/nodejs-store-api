require('dotenv').config();
// async errors

const express = require ('express');
const app = express();

// const notFound = require('./middleware/not-found');
// const errorHandler = require('./middleware/error-handler');

// middleware
app.use(express.json());

// rootes

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">Product route</a>');
});

// product route


// app.use(notFound);
// app.use(errorHandler);

const port = process.env.PORT || 5002;

const start = async () => {
  try {
    await app.listen(port);
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.log(err);
  }
}

start();