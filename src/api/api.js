const router = require("express").Router();
const circuitsRouter = require("./circuits/circuits.routes");
const constructorsRouter = require("./constructors/constructors.routes");
const driversRouter = require("./drivers/drivers.routes")

router.use("/circuits", circuitsRouter);
router.use("/constructors", constructorsRouter);
router.use("/drivers", driversRouter);

module.exports = router;
