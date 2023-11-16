"use strict";

const { AdminService } = require("@services");
const { gravatarUtil } = require("@utils");

class CommentsController {
  async index(req, res) {
    try {
      res.adminRender("pages/admin/comments", {
        pageTitle: ["ادمین", "دیدگاه ها"],
        allComments: await AdminService.getAllComments(),
        gravatarUtil,
      });
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }

  async approve(req, res) {
    try {
      const commentID = req.params.commentID;
      const commentExist = await AdminService.findOneComment(commentID); //! findOneComment Query

      if (commentExist) {
        try {
          const result = await AdminService.approveComment(commentID); //! approveComment Query

          req.flash("success", "دیدگاه با موفقیت تایید شد");
          res.redirect("/admin/comments");
        } catch (error) {
          req.flash("dbError", "مشکل در ارتباط با دیتابیس برای تایید دیدگاه");
          res.redirect("/admin/comments");
        }
      } else {
        req.flash("dbError", "دیدگاه مد نظر در دیتابیس یافت نشد");
        res.redirect("/admin/comments");
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }
  async reject(req, res) {
    try {
      const commentID = req.params.commentID;
      const commentExist = await AdminService.findOneComment(commentID); //! findOneComment Query

      if (commentExist) {
        try {
          const result = await AdminService.rejectComment(commentID); //! approveComment Query

          req.flash("success", "دیدگاه با موفقیت حذف شد");
          res.redirect("/admin/comments");
        } catch (error) {
          req.flash("dbError", "مشکل در ارتباط با دیتابیس برای حذف دیدگاه");
          res.redirect("/admin/comments");
        }
      } else {
        req.flash("dbError", "دیدگاه مد نظر در دیتابیس یافت نشد");
        res.redirect("/admin/comments");
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }
}

module.exports = new CommentsController();
