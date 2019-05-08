const Product = require('../model/product');

const daoCommon = require('./common/daoCommon');

class ProductDao {
    constructor() {
        this.common = new daoCommon;
    }
    findAll() {
        let sqlRequest = 'SELECT p.*, pi.image FROM product p INNER JOIN product_images pi ON p.id = pi.product_id WHERE pi.featured = 1';
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            // console.log(rows);
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.make,
                        row.model,
                        row.year,
                        row.color,
                        row.doors,
                        row.seats,
                        row.cargo,
                        row.power,
                        row.miles,
                        row.description,
                        row.price,
                        row.image
                    )
                );
            }
            return products;
        });
    }
    findOne(id) {
        let sqlRequest = 'SELECT * FROM product WHERE id=' + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.make,
                        row.model,
                        row.year,
                        row.color,
                        row.doors,
                        row.seats,
                        row.cargo,
                        row.power,
                        row.miles,
                        row.price
                    )
                );
            }
            return products;
        });
    }
    findAllByName(make) {
        let sqlRequest = 'SELECT * FROM product WHERE make= "' + make + '"';
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.make,
                        row.model,
                        row.year,
                        row.color,
                        row.doors,
                        row.seats,
                        row.cargo,
                        row.power,
                        row.miles,
                        row.price
                    )
                );
            }
            return products;
        });
    }
    findByName(model) {
        let sqlRequest = 'SELECT * FROM product WHERE model= "' + model + '"';
        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for (const row of rows) {
                products.push(new Product(
                        row.id,
                        row.make,
                        row.model,
                        row.year,
                        row.color,
                        row.doors,
                        row.seats,
                        row.cargo,
                        row.power,
                        row.miles,
                        row.price
                    )
                );
            }
            return products;
        });
    }
    create(Product) {
        let sqlRequest = 'INSERT into product (make, model, year, color, doors, seats, cargo, power, miles, price)' + 'VALUES ($make, $model, $year, $color, $doors, $seats, $cargo, $power, $miles, $price)';

        let sqlParams = {
            $make: Product.make,
            $model: Product.model,
            $year: Product.year,
            $color: Product.color,
            $doors: Product.doors,
            $seats: Product.seats,
            $cargo: Product.cargo,
            $power: Product.power,
            $miles: Product.miles,
            $price: Product.price
        };
        return this.common.run(sqlRequest, sqlParams);
    }
    update(Product) {
        let sqlRequest = 'UPDATE product SET make=$make, model=$model, year=$year, color=$color, doors=$doors, seats=$seats, cargo=$cargo, power=$power, miles=$miles, price=$price WHERE id=$id';

        let sqlParams = {
            $id: Product.id,
            $make: Product.make,
            $model: Product.model,
            $year: Product.year,
            $color: Product.color,
            $doors: Product.doors,
            $seats: Product.seats,
            $cargo: Product.cargo,
            $power: Product.power,
            $miles: Product.miles,
            $price: Product.price
        };
        return this.common.run(sqlRequest, sqlParams);
    }
    deleteById(id) {
        let sqlRequest = 'DELETE FROM product WHERE id=$id';
        let sqlParams = {
            $id: id
        };
        return this.common.run(sqlRequest, sqlParams);
    }
}

module.exports = ProductDao;