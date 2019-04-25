const TransactionDao = require('../dao/transactionDao');

const ControllerCommon = require('./common/controllerCommon');

const Transaction = require('../model/transaction');

class TransactionController {
    constructor() {
        this.transactionDao = new TransactionDao();
        this.common = new ControllerCommon();
    }
    findAll(res) {
        this.transactionDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;
        this.transactionDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName(req, res) {
        let user_id = req.params.user_id;
        this.transactionDao.findByName(user_id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    create(req, res) {
        let transaction = new Transaction();

        transaction.user_id = req.body.user_id;
        transaction.product_id = req.body.product_id;
        transaction.date = req.body.date;

        return this.transactionDao.create(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    update(req, res) {
        let transaction = new Transaction();

        transaction.id = req.params.id;
        transaction.user_id = req.body.user_id;
        transaction.product_id = req.body.product_id;
        transaction.date = req.body.date;

        return this.transactionDao.update(transaction)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    deleteById(req, res) {
        let id = req.params.id;
        this.transactionDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res))
    }

}

module.exports = TransactionController;