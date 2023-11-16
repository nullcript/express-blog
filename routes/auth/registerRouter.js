"use strict";

const express = require("express");
const router = express.Router();
const {RegisterController} = require("@controllers/auth");
const {registerValidator} = require("@validators/auth");
const isGuest = require("@middlewares/isGuestMw");

router.get("/register", [isGuest], RegisterController.index);
router.post("/register", [registerValidator], RegisterController.register);

module.exports = router;
