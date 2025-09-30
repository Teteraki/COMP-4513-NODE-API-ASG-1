// set routs and call the controller to process inputs
const router = require("express").Router();
const constructorsController = require("./constructors.controllers");

router.get("/", constructorsController.getCircuits);

module.exports = router;
