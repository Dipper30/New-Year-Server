'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.Greeting, { as : 'Reports', foreignKey: 'gid', targetKey: 'id' })
    }
  };
  Report.init({
    gid: DataTypes.INTEGER,
    uid: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Report',
  });
  // Report.removeAttribute('id');
  return Report;
};