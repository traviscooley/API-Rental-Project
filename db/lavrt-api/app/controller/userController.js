const UserDao = require('../dao/userDao');

const ControllerCommon = require('./common/controllerCommon');

const User = require('../model/user');

class UserController {
    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    }
    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;
        this.userDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName(req, res) {
        let firstName = req.params.firstName;
        this.userDao.findByName(firstName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName2(req, res) {
        let lastName = req.params.lastName;
        this.userDao.findByName2(lastName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findAllByName(req, res) {
        let userName = req.params.userName;
        this.userDao.findAllByName(userName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    create(req, res) {
        let user = new User();

        user.userName = req.body.userName;
        user.password = req.body.password;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.dob = req.body.dob;
        user.phone = req.body.phone;
        user.email = req.body.email;

        return this.userDao.create(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    update(req, res) {
        let user = new User();

        user.id = req.params.id;
        user.userName = req.body.userName;
        user.password = req.body.password;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.dob = req.body.dob;
        user.phone = req.body.phone;
        user.email = req.body.email;

        return this.userDao.update(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    deleteById(req, res) {
        let userName = req.params.userName;
        this.userDao.deleteById(userName)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res))
    }

}

module.exports = UserController;