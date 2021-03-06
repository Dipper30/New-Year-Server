'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Participation.init({
    uid: DataTypes.INTEGER,
    aid: DataTypes.INTEGER,
    config: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Participation',
  });
  return Participation;
};