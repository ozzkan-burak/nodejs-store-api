

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({msg: 'product testing route'});
};

const getAllProducts = async (req, res) => {
  // const products = await Product.find();
  res.status(200).json({msg: 'product route'});
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}