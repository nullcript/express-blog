"use strict";

const express = require("express");
const router = express.Router();
const { AdminRootController } = require("@controllers/admin");

router.get("/", AdminRootController.index);

module.exports = router;
