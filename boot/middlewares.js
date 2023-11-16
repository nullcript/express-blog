"use strict";

const {rootDir} = require("@globalConfig");
const path = require("node:path");
const {
    redisClient, redisStore, cookieParser, session, expressLayouts, flash, adminRenderMw, loggerMW,
} = require("./modules");

module.exports = (app, express) => {
    redisClient.connect().catch(console.error);

    app.use(expressLayouts);
    app.use("/static", express.static(path.join(rootDir, "public")));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(session({
        unset: "destroy",
        store: redisStore,
        secret: "49dfs?8f76d!5sf79ds8",
        cookie: {maxAge: 600000},
        resave: false,
        saveUninitialized: false,
        name: "NODE.SESSION",
    }));
    app.use(flash());
    app.use(adminRenderMw);
    app.use(loggerMW);
};
