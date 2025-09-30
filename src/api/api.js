const router = require("express").Router();
const circuitsRouter = require("./circuits/circuits.routes");
const constructorsRouter = require("./constructors/constructors.routes");

router.use("/circuits", circuitsRouter);
router.use("/constructors", constructorsRouter);

module.exports = router;
