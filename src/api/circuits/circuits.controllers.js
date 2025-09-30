// take the inputs, validate passed parameters and call services
const circuitsService = require("./circuits.services");

async function getCircuits(req, res) {
  try {
    const circuits = await circuitsService.fetchAllCircuits();
    res.json(circuits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getCircuitByRef(req, res) {
  try {
    const circuit = await circuitsService.fetchCircuitRef(
      req.params.circuitRef
    );
    res.json(circuit);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

async function getSeasonByYear(req, res) {
  try {
    const circuits = await circuitsService.fetchSeasonYear(req.params.year);
    res.json(circuits);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = { getCircuits, getCircuitByRef, getSeasonByYear };
