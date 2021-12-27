'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Greeting, { as : 'Comments', foreignKey: 'gid', targetKey: 'id' })
      Comment.belongsTo(models.User, { foreignKey: 'uid' })
    }
  };
  Comment.init({
    gid: DataTypes.INTEGER,
    root: DataTypes.INTEGER,
    uid: DataTypes.INTEGER,
    content: DataTypes.STRING,
    uploadedAt: DataTypes.BIGINT,
    visible: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Comment',
  });
  return Comment;
};