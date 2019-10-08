'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    'id': {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'description': {
      type: DataTypes.STRING,
      allowNull: true
    },
    'created_at': {
      type: DataTypes.DATE,
      allowNull: false
    },
    'updated_at': {
      type: DataTypes.DATE,
      allowNull: true
    },
    'is_deleted': {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: "roles",
    timestamps: false
  });
  Roles.associate = (models) => {};
  return Roles;
};