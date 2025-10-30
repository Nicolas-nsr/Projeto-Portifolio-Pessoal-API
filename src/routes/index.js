const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../service/authService');
const adminController = require('../controllers/adminController');
const attendantController = require('../controllers/attendantController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

router.post('/login/admin', adminController.login);
router.post('/login/attendant', attendantController.login);

router.use(authMiddleware);

router.post('/product', productController.addProduct);
router.put('/product/:id/price', productController.updatePrice);
router.put('/product/:id/image', productController.updateImage);
router.delete('/product/:id', productController.deleteProduct);
router.get('/product/search', productController.searchProduct);

router.post('/cart/add', cartController.addToCart);

module.exports = router;
