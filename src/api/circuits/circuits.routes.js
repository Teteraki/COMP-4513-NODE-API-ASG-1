// set routs and call the controller to process inputs
const router = require("express").Router();
const circuitsController = require("./circuits.controllers");

router.get("/", circuitsController.getCircuits);
router.get("/:circuitRef", circuitsController.getCircuitByRef);
router.get("/season/:year", circuitsController.getSeasonByYear);

module.exports = router;
