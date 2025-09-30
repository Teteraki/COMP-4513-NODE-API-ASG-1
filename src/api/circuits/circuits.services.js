// call the models
const circuitsModel = require("./circuits.model");

async function fetchAllCircuits() {
  return await circuitsModel.getAllCircuits();
}

async function fetchCircuitRef(circuitRef) {
  const circuit = await circuitsModel.getCircuitRef(circuitRef);
  if (!circuit) {
    throw new Error("Circuit with ref: " + circuitRef + " not found.");
  }
  return circuit;
}

async function fetchSeasonYear(year) {
  const circuit = await circuitsModel.getSeasonYear(year);
  if (!circuit) {
    throw new Error("Circuits with year: " + year + " not found.");
  }
  return circuit;
}

module.exports = { fetchAllCircuits, fetchCircuitRef, fetchSeasonYear };
