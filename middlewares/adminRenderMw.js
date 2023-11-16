"use strict";

module.exports = (req, res, next) => {
    res.adminRender = (template, options) => {
        const [errors, success, dbError, username, email] = [
            req.flash("errors"),
            req.flash("success"),
            req.flash("dbError"),
            req.session?.user?.username,
            req.session?.user?.email
        ];
        options = {...options, errors, success, dbError, username, email};

        res.render(template, options);
    };
    next();
};
