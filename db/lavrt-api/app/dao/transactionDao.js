const Transaction = require('../model/transaction');

const daoCommon = require('./common/daoCommon');

class TransactionDao {
    constructor() {
        this.common = new daoCommon;
    }
    findAll() {
        let sqlRequest = 'SELECT ' + 
        't.id, p.make, p.model, p.year, p.color, p.doors, p.seats, p.cargo, p.power, p.miles, p.price, u.userName, u.password, u.firstName, u.lastName, u.dob, u.phone, u.email, t.date ' +
        'FROM product p INNER JOIN `transaction` t ON p.id = t.product_id INNER JOIN user u ON u.id = t.user_id'
        return this.common.findAll(sqlRequest).then(rows => {
            let transactions = [];
            for (const row of rows) {
                transactions.push({
                        id: row.id,
                        car: {
                            make: row.make,
                            model: row.model,
                            year: row.year,
                            color: row.color,
                            doors: row.doors,
                            seats: row.seats,
                            cargo: row.cargo,
                            power: row.power,
                            miles: row.miles,
                            price: row.price
                        },
                        user: {
                            userName: row.userName,
                            password: row.password,
                            firstName: row.firstName,
                            lastName: row.lastName,
                            dob: row.dob,
                            phone: row.phone,
                            email: row.email
                        },
                        date: row.date
                    }
                );
            }
            return transactions;
        });
    }
    findOne(id) {
        let sqlRequest =  'SELECT ' + 
        't.id, p.make, p.model, p.year, p.color, p.doors, p.seats, p.cargo, p.power, p.miles, p.price, u.userName, u.password, u.firstName, u.lastName, u.dob, u.phone, u.email, t.date ' +
        'FROM product p INNER JOIN `transaction` t ON p.id = t.product_id INNER JOIN user u ON u.id = t.user_id WHERE u.id =' + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let transactions = [];
            for (const row of rows) {
                transactions.push({
                        id: row.id,
                        make: row.make,
                        model: row.model,
                        year: row.year,
                        color: row.color,
                        doors: row.doors,
                        seats: row.seats,
                        cargo: row.cargo,
                        power: row.power,
                        miles: row.miles,
                        price: row.price,
                        userName: row.userName,
                        password: row.password,
                        firstName: row.firstName,
                        lastName: row.lastName,
                        dob: row.dob,
                        phone: row.phone,
                        email: row.email,
                        date: row.date
                    }
                );
            }
            return transactions;
        });
    }
    create(Transaction) {
        let sqlRequest = 'INSERT into transaction (user_id, product_id, date)' + 'VALUES ($user_id, $product, $date)';

        let sqlParams = {
            $user_id: Transaction.user_id,
            $product_id: Transaction.product_id,
            $date: Transaction.date
        };
        return this.common.run(sqlRequest, sqlParams);
    }
    update(Transaction) {
        let sqlRequest = 'UPDATE transaction SET user_id=$user_id, product_id=$product_id, date=$date WHERE id=$id';

        let sqlParams = {
            $id: Transaction.id,
            $user_id: Transaction.user_id,
            $product_id: Transaction.product_id,
            $date: Transaction.date
        };
        return this.common.run(sqlRequest, sqlParams);
    }
    deleteById(id) {
        let sqlRequest = 'DELETE FROM transaction WHERE id=$id';
        let sqlParams = {
            $id: id
        };
        return this.common.run(sqlRequest, sqlParams);
    }
}

module.exports = TransactionDao;