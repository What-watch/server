'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UserMovie extends Model {
    static associate (models) {

    }
  }

  UserMovie.init({
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize
  })

  return UserMovie;
};