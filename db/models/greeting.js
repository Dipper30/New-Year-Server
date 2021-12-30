'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Greeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Greeting.hasMany(models.Comment, { as : 'Comments', foreignKey : 'gid' })
      Greeting.hasMany(models.Like, { as : 'Likes', foreignKey : 'gid' })
      Greeting.hasMany(models.Report, { as : 'Reports', foreignKey : 'gid' })
      Greeting.belongsTo(models.User, { as: 'User', foreignKey: 'uid' })
    }
  };
  Greeting.init({
    content: DataTypes.STRING,
    uploadedAt: DataTypes.BIGINT,
    uid: DataTypes.INTEGER,
    visible: DataTypes.BOOLEAN,
    anonymous: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Greeting',
  });
  return Greeting;
};