const User = require('../model/user');

const daoCommon = require('./common/daoCommon');

class UserDao {
    constructor() {
        this.common = new daoCommon;
    }
    findAll() {
        let sqlRequest = 'SELECT * FROM user ORDER BY id ASC';
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.userName,
                        row.password,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }
    findOne(id) {
        let sqlRequest = 'SELECT * FROM user WHERE id=' + id;
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.userName,
                        row.password,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }
    findByName(firstName) {
        let sqlRequest = 'SELECT * FROM user WHERE firstName= "' + firstName + '"';
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.userName,
                        row.password,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }
    findByName2(lastName) {
        let sqlRequest = 'SELECT * FROM user WHERE lastName= "' + lastName + '"';
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.userName,
                        row.password,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }

    findAllByName(userName) {
        let sqlRequest = 'SELECT * FROM user WHERE userName= "' + userName + '"';
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.userName,
                        row.password,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.email
                    )
                );
            }
            return users;
        });
    }

    create(User) {
        let sqlRequest = 'INSERT into user (userName, password, firstName, lastName, dob, phone, email)' + 'VALUES ($userName, $password, $firstName, $lastName, $dob, $phone, $email)';

        let sqlParams = {
            $userName: User.userName,
            $password: User.password,
            $firstName: User.firstName,
            $lastName: User.lastName,
            $dob: User.dob,
            $phone: User.phone,
            $email: User.email
        };
        return this.common.run(sqlRequest, sqlParams);
    }

    update(User) {
        let sqlRequest = 'UPDATE user SET userName=$userName, password=$password, firstName=$firstName, lastName=$lastName, dob=$dob, phone=$phone, email=$email WHERE id=$id';

        let sqlParams = {
            $id: User.id,
            $userName: User.userName,
            $password: User.password,
            $firstName: User.firstName,
            $lastName: User.lastName,
            $dob: User.dob,
            $phone: User.phone,
            $email: User.email
        };
        return this.common.run(sqlRequest, sqlParams);
    }

    deleteById(userName) {
        let sqlRequest = 'DELETE FROM user WHERE userName=$userName';
        let sqlParams = {
            $userName: userName
        };
        return this.common.run(sqlRequest, sqlParams);
    }
}

module.exports = UserDao;