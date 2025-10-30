const { cart } = require('../model/cartModel');
const { products } = require('../model/productModel');

exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  cart.push({ productId, quantity });
  res.status(201).json({ productId, quantity });
};
