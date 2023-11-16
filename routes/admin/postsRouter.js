"use strict";

const express = require("express");
const router = express.Router();
const { PostsController } = require("@controllers/admin");
const { createPostValidator, updatePostValidator } = require("@validators/admin");


router.get("/posts", PostsController.index);

router.get("/posts/create", PostsController.create);

router.post("/posts/store", createPostValidator, PostsController.store);

router.get("/posts/delete/:postID", PostsController.delete);

router.get("/posts/edit/:postID", PostsController.edit);

router.post(
  "/posts/update/:postID",
  updatePostValidator,
  PostsController.update
);


module.exports = router;
