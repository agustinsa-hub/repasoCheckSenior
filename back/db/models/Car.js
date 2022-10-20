const db = require("..");
const S = require("sequelize");
const User = require("./User");

class Car extends S.Model {}

Car.init(
  {
    marca: {
      type: S.STRING,
      allowNull: false,
    },
    modelo: {
      type: S.STRING,
      allowNull: false,
    },
    year: {
      type: S.BIGINT,
      allowNull: false,
    },
    precio: {
      type: S.BIGINT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "car" }
);

module.exports = Car;
