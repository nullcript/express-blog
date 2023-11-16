"use strict";

const RedisStore = require("connect-redis").default;
const {createClient} = require("redis");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const Pliers = require("@shokri/pliers");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const adminRenderMw = require("../middlewares/adminRenderMw");
const loggerMW = require("../middlewares/loggerMw");


let redisClient = createClient();
let redisStore = new RedisStore({
    client: redisClient,
    prefix: "expBlog"
});

module.exports = {
    cookieParser,
    session,
    multer,
    Pliers,
    expressLayouts,
    flash,
    adminRenderMw,
    loggerMW,
    redisClient,
    redisStore
};
