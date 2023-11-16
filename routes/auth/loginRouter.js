"use strict";

const express = require("express");
const router = express.Router();
const {LoginController} = require("@controllers/auth");
const {loginValidator} = require("@validators/auth");
const isGuest = require("@middlewares/isGuestMw");

router.get("/login", [isGuest], LoginController.index);
router.post("/login", [loginValidator], LoginController.login);

module.exports = router;
