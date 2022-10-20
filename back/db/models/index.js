const User = require("./User");
const Car = require("./Car");

Car.belongsTo(User);
User.hasMany(Car);

module.exports = { User, Car };
