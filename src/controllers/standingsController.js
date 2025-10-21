const standingsModel = require("../models/standingsModel");

// Get request handler for driver standings by a race ID.
async function getDriverStandingsByRace(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await standingsModel.getDriverStandingsByRace(raceId);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `Driver standings not found for race ID: ${raceId}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request handler for constructor standings by a race ID.
async function getConstructorStandingsByRace(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await standingsModel.getConstructorStandingsByRace(raceId);
    if (!data || data.length === 0)
      return res.status(404).json({
        message: `Constructor standings not found for race ID: ${raceId}`,
      });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getDriverStandingsByRace, getConstructorStandingsByRace };
