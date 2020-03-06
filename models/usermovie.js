'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class UserMovie extends Model {
    static associate (models) {
      UserMovie.belongsTo(models.User)
    }
  }

  UserMovie.init({
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.STRING
  }, {
    sequelize
  })

  return UserMovie;
};