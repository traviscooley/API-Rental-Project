const express = require('express');
const router = express.Router();

//controller here
const ProductController = require('../../controller/productController');
const productController = new ProductController();

//product routes
router.get('/', function(req, res) {
    productController.findAll(res);
});

router.get('/:id', function(req, res) {
    productController.findOne(req, res);
});

router.get('/make/:make', function(req, res) {
    productController.findAllByName(req, res);
});

router.get('/model/:model', function(req, res) {
    productController.findByName(req, res);
});

router.post('/create', function(req, res) {
    productController.create(req, res);
});

router.put('/edit/:id', function(req, res) {
    productController.update(req, res);
});

router.delete('/:id', function (req, res) {
    productController.deleteById(req, res);
});

module.exports = router;