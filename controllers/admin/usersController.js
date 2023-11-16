"use strict";

const {AdminService} = require("@services");
const {validationResult} = require("express-validator");
const {gravatarUtil} = require("@utils");

class UsersController {
    async index(req, res) {
        try {
            res.adminRender("pages/admin/users", {
                pageTitle: ["ادمین", "کاربران"],
                allUsers: await AdminService.getAllUsers(), //! getAllUsers Query
                gravatarUtil,
            });
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }

    async create(req, res) {
        try {
            const roles = await AdminService.getAllRoles(); //! getAllRoles Query
            res.adminRender("pages/admin/createUsers", {
                pageTitle: ["ادمین", "ایجاد کاربر جدید"],
                roles,
            });
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }

    async store(req, res) {
        try {
            const userData = {...req.body};
            const result = validationResult(req);

            if (!result.isEmpty()) {
                req.flash("errors", result.array());
                res.redirect("/admin/users/create");
            } else {
                try {
                    const result = await AdminService.storeUser(userData); //! storePost Query

                    req.flash("success", "کاربر با موفقیت ذخیره شد");
                    res.redirect("/admin/users");
                } catch (error) {
                    req.flash(
                        "dbError",
                        "مشکلی در ذخیره سازی کاربر در دیتابیس به وجود آمده است"
                    );
                    res.redirect("/admin/users/create");
                }
            }
        } catch (error) {
            res.send({errorMessage: error});
        }
    }

    async delete(req, res) {
        try {
            const userID = req.params.userID;
            const userExist = await AdminService.findOneUser(userID); //! userExist Query

            if (userExist) {
                try {
                    if (req.session.user.username === userExist.username) {
                        const result = await AdminService.deleteUser(userID); //! deleteUser Query
                        req.session.destroy((err) => {
                            if (err) throw err;
                            res.redirect("/auth/login");
                        });
                    }else {
                        const result = await AdminService.deleteUser(userID); //! deleteUser Query
                        req.flash("success", "کاربر مد نظر با موفقیت از دیتابیس حذف شد");
                        res.redirect("/admin/users");
                    }
                } catch (error) {
                    req.flash(
                        "dbError",
                        "مشکلی در حذف کاربر مد نظر از دیتابیس پیش آمده است"
                    );
                    res.redirect("/admin/users");
                }
            } else {
                req.flash("dbError", "کاربر مد نظر در دیتابیس یافت نشد");
                res.redirect("/admin/users");
            }
        } catch (error) {
            res.send({errorMessage: error});
        }
    }

    async edit(req, res) {
        try {
            const userID = req.params.userID;
            const user = await AdminService.findOneUser(userID); //! getOneUser Query
            const users = await AdminService.getAllUsers(); //! getAllUsers Query
            const roles = await AdminService.getAllRoles(); //! getAllUsers Query

            if (user) {
                res.adminRender("pages/admin/editUsers", {
                    pageTitle: ["ادمین", "ویرایش کاربر"],
                    userID,
                    user,
                    users,
                    roles,
                });
            } else {
                req.flash("dbError", "پست مد نظر در دیتابیس یافت نشد");
                res.redirect("/admin/posts");
            }
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }

    async update(req, res) {
        try {
            const result = validationResult(req);
            const updatedUserData = {...req.body};
            const userID = req.params.userID;
            const userExist = await AdminService.findOneUser(userID); //! userExist Query

            if (userExist) {
                if (result.isEmpty()) {
                    try {
                        const result = await AdminService.updateUsers(
                            userID,
                            updatedUserData
                        ); //! updateUsers Query

                        req.flash("success", "کاربر مد نظر با موفقیت آپدیت شد");
                        res.redirect("/admin/users");
                    } catch (error) {
                        req.flash(
                            "dbError",
                            "مشکلی در آپدیت کاربر مد نظر در دیتابیس پیش آمده است"
                        );
                        res.redirect("/admin/users");
                    }
                } else {
                    req.flash("errors", result.array());
                    res.redirect(`/admin/users/edit/${userID}`);
                }
            } else {
                req.flash("dbError", "کاربر مد نظر در دیتابیس یافت نشد");
                res.redirect("/admin/users");
            }
        } catch (error) {
            res.send({errorMessage: error});
        }
    }
}

module.exports = new UsersController();
