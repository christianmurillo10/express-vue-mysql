'use strict';
const bcrypt = require('../helpers/bcrypt-helper');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    'id': {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    'email': {
      type: DataTypes.STRING(100), 
      allowNull: false
    },
    'username': {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    'password': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'role_id': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'created_at': {
      type: DataTypes.DATE,
      allowNull: false
    },
    'updated_at': {
      type: DataTypes.DATE,
      allowNull: true
    },
    'permission_type': {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: '1'
    },
    'is_logged': {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: '0'
    },
    'is_active': {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: '1'
    },
    'is_deleted': {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: "users",
    timestamps: false
  });

  Users.associate = (models) => {
    Users.belongsTo(models.Roles, {
      foreignKey: 'role_id',
      as: 'roles'
    });
  };

  Users.beforeCreate(async (value, options) => {
    value.password = await bcrypt.hashPassword(value.password);
  })

  return Users;
};