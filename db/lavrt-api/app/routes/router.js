const express = require('express');
const router = express.Router();

//define api routes here
router.use('/user', require('./api/userRoutes'));
router.use('/product', require('./api/productRoutes'));
router.use('/transaction', require('./api/transactionRoutes'));

//add api routes here
module.exports = router;