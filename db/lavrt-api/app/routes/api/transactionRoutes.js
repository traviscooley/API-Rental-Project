const express = require('express');
const router = express.Router();

//controller here
const TransactionController = require('../../controller/transactionController');
const transactionController = new TransactionController();

//user routes
router.get('/', function(req, res) {
    transactionController.findAll(res);
});

router.get('/:id', function(req, res) {
    transactionController.findOne(req, res);
});

router.get('/order/:user_id', function(req, res) {
    transactionController.findByName(req, res);
});

router.post('/create', function(req, res) {
    transactionController.create(req, res);
});

router.put('/edit/:id', function(req, res) {
    transactionController.update(req, res);
});

router.delete('/:id', function (req, res) {
    transactionController.deleteById(req, res);
});

module.exports = router;