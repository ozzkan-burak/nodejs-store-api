const Product = require('../models/product.js');


const getAllProductsStatic = async (req, res) => {
  //throw new Error('testing async error handling');
  const search = 'a';
  const products = await Product.find({}).sort('-name price' );

  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {


  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  };

  if(company) {
    queryObject.company = company;
  }

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}