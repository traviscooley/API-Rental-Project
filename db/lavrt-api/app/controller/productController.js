const ProductDao = require('../dao/productDao');

const ControllerCommon = require('./common/controllerCommon');

const Product = require('../model/product');

class ProductController {
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }
    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;
        this.productDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findAllByName(req, res) {
        let make = req.params.make;
        this.productDao.findAllByName(make)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName(req, res) {
        let model = req.params.model;
        this.productDao.findByName(model)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    create(req, res) {
        let product = new Product();

        product.make = req.body.make;
        product.model = req.body.model;
        product.year = req.body.year;
        product.color = req.body.color;
        product.doors = req.body.doors;
        product.seats = req.body.seats;
        product.cargo = req.body.cargo;
        product.power = req.body.power;
        product.miles = req.body.miles;
        product.price = req.body.price;

        return this.productDao.create(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    update(req, res) {
        let product = new Product();

        product.id = req.params.id;
        product.make = req.body.make;
        product.model = req.body.model;
        product.year = req.body.year;
        product.color = req.body.color;
        product.doors = req.body.doors;
        product.seats = req.body.seats;
        product.cargo = req.body.cargo;
        product.power = req.body.power;
        product.miles = req.body.miles;
        product.price = req.body.price;

        return this.productDao.update(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    deleteById(req, res) {
        let id = req.params.id;
        this.productDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res))
    }

}

module.exports = ProductController;