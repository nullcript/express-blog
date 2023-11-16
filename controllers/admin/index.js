"use strict";

const AdminRootController = require("./adminRootController");
const DashboardController = require("./dashboardController");
const PostsController = require("./postsController");
const CommentsController = require("./commentsController");
const UsersController = require("./usersController");
const SettingsController = require("./settingsController");
const LogoutController = require("./logoutController");

module.exports = {
    AdminRootController,
    DashboardController,
    PostsController,
    CommentsController,
    UsersController,
    SettingsController,
    LogoutController
};
