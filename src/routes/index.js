const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../service/authService');
const adminController = require('../controllers/adminController');
const attendantController = require('../controllers/attendantController');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');



router.post('/admin/register', adminController.register);
router.post('/login/admin', adminController.login);

router.use(authMiddleware);

router.post('/product', productController.addProduct);
router.put('/product/:id/price', productController.updatePrice);
router.delete('/product/:id', productController.deleteProduct);
router.get('/product/search', productController.searchProduct);


router.post('/cart/add', cartController.addToCart);
router.post('/cart/checkout', cartController.checkout);

module.exports = router;
