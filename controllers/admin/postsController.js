"use strict";

const { AdminService } = require("@services");
const { validationResult } = require("express-validator");

class PostsController {
  async index(req, res) {
    try {
      res.adminRender("pages/admin/posts", {
        pageTitle: ["ادمین", "مطالب"],
        allPosts: await AdminService.getAllPosts(), //! getAllPosts Query
      });
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }

  async create(req, res) {
    try {
      const categories = await AdminService.getCategories(); //! getCategories Query
      const users = await AdminService.getAllUsers(); //! getAllUsers Query

      res.adminRender("pages/admin/createPosts", {
        pageTitle: ["ادمین", "ایجاد مطلب جدید"],
        categories,
        users,
      });
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }

  async store(req, res) {
    try {
      const postData = { ...req.body };
      const result = validationResult(req);

      if (!result.isEmpty()) {
        req.flash("errors", result.array());
        res.redirect("/admin/posts/create");
      } else {
        try {
          const result = await AdminService.storePost(postData); //! storePost Query

          req.flash("success", "مطلب با موفقیت ذخیره شد");
          res.redirect("/admin/posts");
        } catch (error) {
          req.flash(
            "dbError",
            "مشکلی در ذخیره سازی مطلب در دیتابیس به وجود آمده است"
          );
          res.redirect("/admin/posts/create");
        }
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }

  async delete(req, res) {
    try {
      const postID = req.params.postID;
      const postExist = await AdminService.findOnePost(postID); //! postExist Query

      if (postExist) {
        try {
          const result = await AdminService.deletePost(postID); //! deletePost Query
          req.flash("success", "مطلب مد نظر با موفقیت از دیتابیس حذف شد");
          res.redirect("/admin/posts");
        } catch (error) {
          req.flash(
            "dbError",
            "مشکلی در حذف مطلب مد نظر از دیتابیس پیش آمده است"
          );
          res.redirect("/admin/posts");
        }
      } else {
        req.flash("dbError", "پست مد نظر در دیتابیس یافت نشد");
        res.redirect("/admin/posts");
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }

  async edit(req, res) {
    try {
      const postID = req.params.postID;
      const categories = await AdminService.getCategories(); //! getCategories Query
      const post = await AdminService.findOnePost(postID); //! getPost Query
      const users = await AdminService.getAllUsers(); //! getAllUsers Query

      if (post) {
        res.adminRender("pages/admin/editPosts", {
          pageTitle: ["ادمین", "ویرایش مطلب"],
          postID,
          post,
          categories,
          users,
        });
      } else {
        req.flash("dbError", "پست مد نظر در دیتابیس یافت نشد");
        res.redirect("/admin/posts");
      }
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }

  async update(req, res) {
    try {
      const result = validationResult(req);
      const updatedPostData = { ...req.body };
      const postID = req.params.postID;
      const postExist = await AdminService.findOnePost(postID); //! postExist Query

      if (postExist) {
        if (result.isEmpty()) {
          try {
            const result = await AdminService.updatePosts(
              postID,
              updatedPostData
            ); //! updatePosts Query

            req.flash("success", "مطلب مد نظر با موفقیت آپدیت شد");
            res.redirect("/admin/posts");
          } catch (error) {
            req.flash(
              "dbError",
              "مشکلی در آپدیت مطلب مد نظر در دیتابیس پیش آمده است"
            );
            res.redirect("/admin/posts");
          }
        } else {
          req.flash("errors", result.array());
          res.redirect(`/admin/posts/edit/${postID}`);
        }
      } else {
        req.flash("dbError", "مطلب مد نظر در دیتابیس یافت نشد");
        res.redirect("/admin/posts");
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }
}

module.exports = new PostsController();
