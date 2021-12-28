'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Message.init({
    uploadedAt: DataTypes.BIGINT,
    to: DataTypes.INTEGER,
    title_en: DataTypes.STRING,
    title_zh_cn: DataTypes.STRING,
    title_ja: DataTypes.STRING,
    content_en: DataTypes.STRING,
    content_zh_cn: DataTypes.STRING,
    content_ja: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Message',
  });
  return Message;
};