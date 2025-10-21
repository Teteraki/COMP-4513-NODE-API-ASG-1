const qualifyingModel = require("../models/qualifyingModel");

// Get request for qualifying by race ID.
async function getQualifyingByRace(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await qualifyingModel.getQualifyingByRace(raceId);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Qualifying not found for race ID: ${raceId}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getQualifyingByRace };
