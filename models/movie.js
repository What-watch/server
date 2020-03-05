'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Movie extends Model {
    static associate(models) {
      Movie.belongsToMany(models.User, {through: models.UserMovie})
    }
  }

  Movie.init({
    idImdb: DataTypes.STRING
  }, {
    sequelize
  })

  return Movie;
};