class Product {
    constructor(id, make, model, year, color, doors, seats, cargo, power, miles, description, price, image) {
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
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

module.exports = Product;