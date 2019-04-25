class Transaction {
    constructor(id, user_id, product_id, date) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.date = date;
    }
}

module.exports = Transaction;