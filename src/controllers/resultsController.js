const resultsModel = require("../models/resultsModel");

// Get request for results by a race ID.
async function getResultsByRace(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await resultsModel.getResultsByRace(raceId);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Results not found for race ID: ${raceId}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for results by a driver ref.
async function getResultsByDriverRef(req, res, next) {
  try {
    const { ref } = req.params;
    const data = await resultsModel.getResultsByDriverRef(ref);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Results not found for driver: ${ref}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get results for a driver by ref within a season range.
async function getResultsByDriverRefSeasonRange(req, res, next) {
  try {
    const { ref, start, end } = req.params;

    if (start > end) {
      return res.status(404).json({
        message: `Start year must be less than or equal to end year ie; 2000-2005 | Current: ${
          start + `-` + end
        }`,
      });
    }

    const data = await resultsModel.getResultsByDriverRefSeasonRange(
      ref,
      start,
      end
    );

    if (!data || data.length === 0)
      return res.status(404).json({
        message: `Results not found for driver: ${ref} between ${start}-${end}`,
      });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getResultsByRace,
  getResultsByDriverRef,
  getResultsByDriverRefSeasonRange,
};
