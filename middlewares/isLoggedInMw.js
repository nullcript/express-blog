"use strict";

module.exports = (req, res, next) => {
    if (req.session?.user) {
        return next();
    }
    res.redirect("/");
};
