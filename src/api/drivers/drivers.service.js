// call the models
const driversModel = require("./drivers.model");

async function fetchAllDrivers() {
  return await driversModel.getAllDrivers();
}

async function fetchDriverRef(driverRef) {
  const driver = await driversModel.getDriverRef(driverRef);
  if (!driver) {
    throw new Error("Driver with ref: " + driverRef + " not found.");
  }
  return driver;
}

async function fetchDriversSurname(surname) {
  const drivers = await driversModel.getDriverRef(surname);
  if (!drivers) {
    throw new Error("Drivers with surname: " + surname + " not found.");
  }
  return drivers;
}



async function fetchDriversRaceID(raceID) {
  const drivers = await driversModel.getDriversRaceID(raceID);
  if (!drivers) {
    throw new Error("Race ID: " + raceID + " resulted in drivers not found.");
  }
  return drivers;
}



module.exports = { fetchAllDrivers, fetchDriverRef, fetchDriversSurname, fetchDriversRaceID };
