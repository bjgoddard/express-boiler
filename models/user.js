'use strict';

let bcrypt= require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: 'Come on, we know you have a firstname.'
        }
      }
    },
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Hey please give a valid email address! Q(^.^Q)'
        }
      }
    },
    username: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 25],
          msg: 'Your password must be between 6 and 25 characters'
        }
      }
    },
    photo_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'u ugly huh'
        }
      }
    },
    bio: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: pendingUser => {
        if (pendingUser && pendingUser.password) {
          //Hash the password
          let hashedPassword = bcrypt.hashSync(pendingUser.password, 12)

          //Reassign the password field to hashed value
          pendingUser.password = hashedPassword
        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };

  user.prototype.validPassword = function (typedInPassword) {
    console.log('compare')
    // Determine if typed-in password hashes to same thing as existing hash
    let correctPassword = bcrypt.compareSync(typedInPassword, this.password)
    // Return the result of that comparison
    return correctPassword
  }

  return user;
};