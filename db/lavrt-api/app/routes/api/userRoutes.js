const express = require('express');
const router = express.Router();

//controller here
const UserController = require('../../controller/userController');
const userController = new UserController();

//user routes
router.get('/', function(req, res) {
    userController.findAll(res);
});

router.get('/:id', function(req, res) {
    userController.findOne(req, res);
});

router.get('/fname/:firstName', function(req, res) {
    userController.findByName(req, res);
});

router.get('/lname/:lastName', function(req, res) {
    userController.findByName2(req, res);
});

router.get('/account/:userName', function(req, res) {
    userController.findAllByName(req, res);
});

router.post('/create', function(req, res) {
    userController.create(req, res);
});

router.put('/edit/:id', function(req, res) {
    userController.update(req, res);
});

router.delete('/:userName', function (req, res) {
    userController.deleteById(req, res);
});

module.exports = router;