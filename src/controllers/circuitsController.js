const circuitsModel = require("../models/circuitsModel");

// Request handler for all circuits.
async function getAllCircuits(req, res, next) {
  try {
    const data = await circuitsModel.getAllCircuits();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Request handler for single circuit by ref.
async function getCircuitByRef(req, res, next) {
  try {
    const { ref } = req.params;
    const data = await circuitsModel.getCircuitByRef(ref);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Circuit not found for ref: ${ref}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Request handler for circuits by season/year.
async function getCircuitsBySeason(req, res, next) {
  try {
    const { year } = req.params;
    const data = await circuitsModel.getCircuitsBySeason(year);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Circuits not found for season: ${year}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllCircuits, getCircuitByRef, getCircuitsBySeason };
