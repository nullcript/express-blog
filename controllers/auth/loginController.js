"use strict";

const {AuthService} = require("@services");
const {validationResult} = require("express-validator");

class LoginController {
    async index(req, res) {
        try {
            res.adminRender("pages/auth/login", {
                layout: "layouts/loginLayout", pageTitle: ["ورود", "وبلاگ من"],
            });
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const result = validationResult(req);

            if (!result.isEmpty()) {
                req.flash("errors", result.array());
                res.redirect("/auth/login");
            } else {
                const userExist = await AuthService.checkUserExist(email);
                if (userExist) {
                    const matchEmailPassword = await AuthService.checkMatchEmailPassword(email, password);

                    if (matchEmailPassword) {
                        req.session.user = {username: userExist.username, email, password};
                        req.flash("success", ` کاربر محترم ${userExist.username}  خوش آمدید `);
                        res.redirect("/admin/dashboard");
                    } else {
                        req.flash("dbError", "پسورد و ایمیل وارده باهم تطابق ندارند");
                        res.redirect("/auth/login");
                    }


                } else {
                    req.flash("dbError", "ایمیل وارده در دیتابیس وجود ندارد، میتوانید از صفحه ثبت نام اقدام کنید");
                    res.redirect("/auth/login");
                }
            }
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }
}

module.exports = new LoginController();
