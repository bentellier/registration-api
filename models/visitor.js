'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visitor = sequelize.define('Visitor', {
    visitorName: DataTypes.STRING,
    visitorCompany: DataTypes.STRING,
    visitedName: DataTypes.STRING,
    reasonSelection: DataTypes.STRING
  }, {
    paranoid: true
  });
  // Visitor.associate = function(models) {
  //   // associations can be defined here

  // };
  return Visitor;
};