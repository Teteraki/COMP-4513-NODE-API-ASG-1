// set routs and call the controller to process inputs
const router = require("express").Router();
const driversController = require("./drivers.controller");

router.get("/", driversController.getDrivers);
router.get("/:ref", driversController.getDriverByRef);
router.get("/search/:substring", driversController.getDriversBySurname);
router.get("/race/:raceID", driversController.getDriversByRaceID);

module.exports = router;