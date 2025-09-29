const express = require('express');
const router = express.Router();

// All API Endpoints
const circuitsRoutes = require('./circuits');
const constructorsRoutes = require('./constructors');
const driversRoutes = require('./drivers');
const qualifyingRoutes = require('./qualifying');
const racesRoutes = require('./qualifying');
const resultsRoutes = require('./results');
const standingsRoutes = require('./standings');

// Path's and their handler.
// router.use("/circuits", circuitsRoutes);
// router.use("/constructors", constructorsRoutes);
// router.use("/drivers", driversRoutes);
// router.use("/races", racesRoutes);
// router.use("/results", resultsRoutes);
// router.use("/qualifying", qualifyingRoutes);
// router.use("/standings", standingsRoutes);

// Export router.
module.exports = router;