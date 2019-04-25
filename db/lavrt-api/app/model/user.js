class User {
    constructor(id, userName, password, firstName, lastName, dob, phone, email) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.email = email;
    }
}

module.exports = User;