class Product {
    constructor(id, make, model, year, color, doors, seats, cargo, power, miles, price) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.doors = doors;
        this.seats = seats;
        this.cargo = cargo;
        this.power = power;
        this.miles = miles;
        this.price = price;
    }
}

module.exports = Product;