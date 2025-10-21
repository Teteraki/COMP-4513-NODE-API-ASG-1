const racesModel = require("../models/racesModel");

// Get request for races by ID.
async function getRaceById(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await racesModel.getRaceById(raceId);
    if (!data)
      return res
        .status(404)
        .json({ message: `Race not found for ID: ${raceId}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for races by season.
async function getRacesBySeason(req, res, next) {
  try {
    const { year } = req.params;
    const data = await racesModel.getRacesBySeason(year);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Races not found for season: ${year}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for races within a given season and round number.
async function getRaceBySeasonAndRound(req, res, next) {
  try {
    const { year, round } = req.params;
    const data = await racesModel.getRaceBySeasonAndRound(year, round);
    if (!data)
      return res.status(404).json({
        message: `Race not found for season: ${year}, round: ${round}`,
      });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for races by a given circuit ref.
async function getRacesByCircuit(req, res, next) {
  try {
    const { ref } = req.params;
    const data = await racesModel.getRacesByCircuit(ref);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `No races found for circuit: ${ref}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for races by circuit and season range.
async function getRacesByCircuitSeasonRange(req, res, next) {
  try {
    const { ref, start, end } = req.params;

    if (start > end) {
      return res.status(404).json({
        message: `Start year must be less than or equal to end year ie; 2000-2005 | Current: ${
          start + `-` + end
        }`,
      });
    }

    const data = await racesModel.getRacesByCircuitSeasonRange(ref, start, end);
    if (!data || data.length === 0)
      return res.status(404).json({
        message: `No races found for circuit: ${ref} in seasons ${start}-${end}`,
      });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getRaceById,
  getRacesBySeason,
  getRaceBySeasonAndRound,
  getRacesByCircuit,
  getRacesByCircuitSeasonRange,
};
