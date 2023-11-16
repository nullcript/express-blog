"use strict";

const adminRootRouter = require("./adminRootRouter");
const dashboardRouter = require("./dashboardRouter");
const postsRouter = require("./postsRouter");
const commentsRouter = require("./commentsRouter");
const usersRouter = require("./usersRouter");
const settingsRouter = require("./settingsRouter");
const logoutRouter = require("./logoutRouter");

const isLoggedIn = require("@middlewares/isLoggedInMw");

module.exports = (app) => {
    app.use("/admin", [isLoggedIn], adminRootRouter);
    app.use("/admin", [isLoggedIn], dashboardRouter);
    app.use("/admin", [isLoggedIn], postsRouter);
    app.use("/admin", [isLoggedIn], commentsRouter);
    app.use("/admin", [isLoggedIn], usersRouter);
    app.use("/admin", [isLoggedIn], settingsRouter);
    app.use("/admin", [isLoggedIn], logoutRouter);
};
