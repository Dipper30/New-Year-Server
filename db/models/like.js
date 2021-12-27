'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.Greeting, { as : 'Likes', foreignKey: 'gid', targetKey: 'id' })
    }
  };
  Like.init({
    gid: DataTypes.INTEGER,
    uid: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Like',
  });
  // Like.removeAttribute('id');
  return Like;
};