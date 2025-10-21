const driversModel = require("../models/driversModel");

// Get request for all drivers.
async function getAllDrivers(req, res, next) {
  try {
    const data = await driversModel.getAllDrivers();
    if (!data || data.length === 0)
      return res.status(404).json({ message: "No drivers found" });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for a driver by ref.
async function getDriverByRef(req, res, next) {
  try {
    const { ref } = req.params;
    const data = await driversModel.getDriverByRef(ref);
    if (!data)
      return res
        .status(404)
        .json({ message: `Driver not found for ref: ${ref}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request by partial/fill matching surname substring.
async function searchDriversBySubstring(req, res, next) {
  try {
    const { substring } = req.params;
    const data = await driversModel.searchDriversBySubstring(substring);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `No drivers found for substring: ${substring}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for drivers within a given race.
async function getDriversByRace(req, res, next) {
  try {
    const { raceId } = req.params;
    const data = await driversModel.getDriversByRace(raceId);
    if (!data || data.length === 0)
      return res
        .status(404)
        .json({ message: `No drivers found for race ID: ${raceId}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllDrivers,
  getDriverByRef,
  searchDriversBySubstring,
  getDriversByRace,
};
