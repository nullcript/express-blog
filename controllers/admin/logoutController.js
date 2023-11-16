"use strict";

class LogoutController {
    async index(req, res) {
        try {
            req.session.destroy((err) => {
                if (err) throw err;
                res.redirect("/auth/login");
            });
        } catch (error) {
            res.send({
                errorMessage: error,
            });
        }
    }
}

module.exports = new LogoutController();
