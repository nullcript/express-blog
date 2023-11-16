"use strict";

const {
  sequelize,
  User,
  Post,
  Comment,
  Category,
  Role,
  Setting,
} = require("@models");

const { dateUtil } = require("@utils");

class AdminService {
  //* -----------------------------------| dashboardService |--
  async usersCount() {
    return await User.count();
  }

  async postsCount() {
    return await Post.count();
  }

  async viewsCount() {
    return await Post.sum("views");
  }

  async commentsCount() {
    return await Comment.count();
  }

  async last5Comments() {
    const L5C = await Comment.findAll({
      include: { all: true },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    L5C.map((v) => (v.jalaliCreatedAt = dateUtil({ date: v.createdAt }))); //! Presenter(date)
    return L5C;
  }
  //* -----------------------------------| postsService |--
  async getAllPosts() {
    const GAP = await Post.findAll({
      include: { all: true, nested: true },
      order: [["createdAt", "DESC"]],
    });

    GAP.map((v) => {
      v.jalaliCreatedAt = dateUtil({ date: v.createdAt });
      v.jalaliUpdatedAt = dateUtil({ date: v.updatedAt });
    }); //! Presenter(date)
    return GAP;
  }

  async storePost(postData) {
    return await Post.create(postData);
  }

  async deletePost(postID) {
    return await Post.destroy({
      where: {
        id: postID,
      },
      force: true,
    });
  }

  async findOnePost(postID) {
    return await Post.findOne({
      where: {
        id: postID,
      },
    });
  }

  async getCategories() {
    return await Category.findAll();
  }

  async updatePosts(postID, updatedPostData) {
    return await Post.update(
      { ...updatedPostData },
      {
        where: {
          id: postID,
        },
      }
    );
  }

  //* -----------------------------------| commentsService |--
  async getAllComments() {
    const GAC = await Comment.findAll({
      include: { all: true, nested: true },
    });
    GAC.map((v) => (v.jalaliCreatedAt = dateUtil({ date: v.createdAt }))); //! Presenter(date)
    return GAC;
  }

  async findOneComment(commentID) {
    return await Comment.findOne({
      where: {
        id: commentID,
      },
    });
  }

  async approveComment(commentID) {
    return await Comment.update(
      { status: 1 },
      {
        where: {
          id: commentID,
        },
      }
    );
  }

  async rejectComment(commentID) {
    return await Comment.destroy({
      where: {
        id: commentID,
      },
      force: true,
    });
  }

  //* -----------------------------------| usersService |--
  async getAllUsers() {
    const GAU = await User.findAll({
      include: Role,
      order: [["createdAt", "DESC"]],
    });

    GAU.map((v) => {
      v.jalaliCreatedAt = dateUtil({ date: v.createdAt });
    }); //! Presenter(date)
    return GAU;
  }

  async getAllRoles() {
    return await Role.findAll({});
  }

  async storeUser(userData) {
    return await User.create(userData);
  }

  async findOneUser(userID) {
    return await User.findOne({
      where: {
        id: userID,
      },
    });
  }

  async deleteUser(userID) {
    return await User.destroy({
      where: {
        id: userID,
      },
      force: true,
    });
  }

  async updateUsers(userID, updatedUserData) {
    return await User.update(
      { ...updatedUserData },
      {
        where: {
          id: userID,
        },
      }
    );
  }

  //* -----------------------------------| usersService |--
  async getAllSettings() {
    return Setting.findAll({});
  }

  async updateSettings(updatedSettingData) {
    const updateQuery = Object.keys(updatedSettingData);
    let statements = [];

    for (let settingName of updateQuery) {
      statements.push(
        await Setting.update(
          {
            value: updatedSettingData[settingName],
          },
          {
            where: {
              name: settingName,
            },
          }
        )
      );
    }
    return statements;
  }
}

module.exports = new AdminService();
