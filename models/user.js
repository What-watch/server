'use strict';
const {
  hashPassword
} = require('../helper/hashpassword')
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model {
    static associate(models) {
      User.hasMany(models.UserMovie)
    }
  }

  User.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Fullname is required'
        },
        notEmpty: {
          args: true,
          msg: 'Fullname is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          args: true,
          msg: 'Password is required'
        },
        len: {
          args: [8],
          msg: 'Minimal password length is 8 character'
        }
      }
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'No. Handphone is required'
        },
        notEmpty: {
          args: true,
          msg: 'No. Handphone is required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, option) => {
        console.log(User.password);
        User.password = hashPassword(User.password)
        console.log(User.password);
      }
    },
    sequelize,
    modelName: 'User'
  })

  return User;
};