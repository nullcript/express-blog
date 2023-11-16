"use strict";

const express = require("express");
const router = express.Router();
const { AuthRootController } = require("@controllers/auth");

router.get("/", AuthRootController.index);

module.exports = router;
