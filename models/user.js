'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    First_name: DataTypes.STRING,
    Last_name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Date_of_birth: DataTypes.INTEGER,
    Mobile_Number: DataTypes.INTEGER,
    Gender: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};