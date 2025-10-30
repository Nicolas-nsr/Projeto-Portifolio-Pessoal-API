const { cart } = require('../model/cartModel');
const { products } = require('../model/productModel');


exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  cart.push({ productId, quantity });
  res.status(201).json({ productId, quantity });
};

exports.checkout = (req, res) => {
  if (cart.length === 0) return res.status(400).json({ error: 'Carrinho vazio' });
  // Simula finalização do pedido
  const pedido = cart.map(item => {
    const produto = products.find(p => p.id == item.productId);
    return { produto, quantidade: item.quantity };
  });
  cart.length = 0;
  res.status(200).json({ pedido, mensagem: 'Pedido finalizado com sucesso' });
};
