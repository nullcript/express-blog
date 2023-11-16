"use strict";

const express = require("express");
const router = express.Router();
const { CommentsController } = require("@controllers/admin");


router.get("/comments", CommentsController.index);

router.get("/comments/approve/:commentID", CommentsController.approve);

router.get("/comments/reject/:commentID", CommentsController.reject);


module.exports = router;
