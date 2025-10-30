const { products } = require('../model/productModel');

exports.addProduct = (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
  }
  const id = products.length + 1;
  products.push({ id, name, price, image });
  res.status(201).json({ id, name, price, image });
};

exports.updatePrice = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const product = products.find(p => p.id == id);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  product.price = price;
  res.json(product);
};

exports.updateImage = (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  const product = products.find(p => p.id == id);
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  product.image = image;
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ error: 'Produto não encontrado' });
  products.splice(index, 1);
  res.status(204).send();
};

exports.searchProduct = (req, res) => {
  const { q } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  res.json(result);
};
