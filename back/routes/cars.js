const express = require("express");
const router = express.Router();
const { User, Car } = require("../db/models");

router.get("/", (req, res, next) => {
  Car.findAll().then((cars) => {
    res.send(cars);
  });
});

router.get("/:id", (req, res, next) => {
  Car.findOne({
    where: { id: req.params.id },
    include: { model: User },
  }).then((cars) => {
    res.send(cars);
  });
});

router.post("/:userId", (req, res, next) => {
  User.findByPk(req.params.userId).then((user) =>
    Car.create(req.body).then((car) => {
      car.setUser(user);
      res.send(car);
    })
  );
});

module.exports = router;
