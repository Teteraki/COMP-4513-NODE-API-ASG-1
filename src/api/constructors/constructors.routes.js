// set routs and call the controller to process inputs
const router = require("express").Router();
const constructorsController = require("./constructors.controllers");

router.get("/", constructorsController.getConstructors);
router.get("/:ref", constructorsController.getConstructorByRef);

module.exports = router;
