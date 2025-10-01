const driversService = require("./drivers.service");

async function getDrivers(req, res) {
  try {
    const drivers = await driversService.fetchAllDrivers();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getDriverByRef(req, res) {
  try {
    const driver = await driversService.fetchDriverRef(
      req.params.ref
    );
    res.json(driver);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}


async function getDriversBySurname(req, res) {
  try {
    const drivers = await driversService.fetchDriversSurname(
      req.params.substring
    );
    res.json(drivers);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

async function getDriversByRaceID(req, res) {
  try {
    const drivers = await driversService.fetchDriversRaceID(
      req.params.raceID
    );
    res.json(drivers);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = { getDrivers, getDriverByRef, getDriversBySurname, getDriversByRaceID };
