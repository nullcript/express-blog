"use strict";

const {
    sequelize,
    User,
    Post,
    Comment,
    Category,
    Role,
    Setting,
} = require("@models");

class AuthService {
    //* -----------------------------------| register |--
    async checkUserExist(email) {
        return await User.findOne({
            where: {
                email,
            },
        });
    }

    async createUser(registerData) {
        return await User.create(registerData);
    }

    async checkMatchEmailPassword(email, inputPassword) {
        const userPassword = await User.findOne({
            attributes: ["password"],
            where: {
                email
            }
        });

        return userPassword.password === inputPassword;
    }


    //* -----------------------------------| login |--

}

module.exports = new AuthService();
