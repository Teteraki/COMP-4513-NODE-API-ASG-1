const router = require("express").Router();

const circuitsController = require("../controllers/circuitsController");
const constructorsController = require("../controllers/constructorsController");
const driversController = require("../controllers/driversController");
const racesController = require("../controllers/racesController");
const resultsController = require("../controllers/resultsController");
const qualifyingController = require("../controllers/qualifyingController");
const standingsController = require("../controllers/standingsController");

//
// CIRCUITS
//
router.get("/circuits", circuitsController.getAllCircuits);
router.get("/circuits/:ref", circuitsController.getCircuitByRef);
router.get("/circuits/season/:year", circuitsController.getCircuitsBySeason);

//
// CONSTRUCTORS
//
router.get("/constructors", constructorsController.getAllConstructors);
router.get("/constructors/:ref", constructorsController.getConstructorByRef);

//
// DRIVERS
//
router.get("/drivers", driversController.getAllDrivers);
router.get("/drivers/:ref", driversController.getDriverByRef);
router.get(
  "/drivers/search/:substring",
  driversController.searchDriversBySubstring
);
router.get("/drivers/race/:raceId", driversController.getDriversByRace);

//
// RACES
//
router.get("/races/:raceId", racesController.getRaceById);
router.get("/races/season/:year", racesController.getRacesBySeason);
router.get(
  "/races/season/:year/:round",
  racesController.getRaceBySeasonAndRound
);
router.get("/races/circuits/:ref", racesController.getRacesByCircuit);
router.get(
  "/races/circuits/:ref/season/:start/:end",
  racesController.getRacesByCircuitSeasonRange
);

//
// RESULTS
//
router.get("/results/:raceId", resultsController.getResultsByRace);
router.get("/results/driver/:ref", resultsController.getResultsByDriverRef);
router.get(
  "/results/drivers/:ref/seasons/:start/:end",
  resultsController.getResultsByDriverRefSeasonRange
);

//
// QUALIFYING
//
router.get("/qualifying/:raceId", qualifyingController.getQualifyingByRace);

//
// STANDINGS
//
router.get(
  "/standings/drivers/:raceId",
  standingsController.getDriverStandingsByRace
);
router.get(
  "/standings/constructors/:raceId",
  standingsController.getConstructorStandingsByRace
);

module.exports = router;
