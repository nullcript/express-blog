"use strict";

const express = require("express");
const router = express.Router();
const {LogoutController} = require("@controllers/admin");


router.get("/logout", LogoutController.index);


module.exports = router;
