const db = require("../../config/sqlite3");

// Returns all drivers.
function getAllDrivers() {
  return db.all("SELECT * FROM drivers");
}

// Returns the specified driver.
function getDriverByRef(ref) {
  return db.get("SELECT * FROM drivers WHERE driverRef = ?", [ref]);
}

// Returns the drivers with the matching surname substring (partial and fully matching returned.)
function searchDriversBySubstring(substring) {
  return db.all("SELECT * FROM drivers WHERE LOWER(surname) LIKE ?", [
    `${substring.toLowerCase()}%`,
  ]);
}

// Return the drivers within a given race.
function getDriversByRace(raceId) {
  const sql = `
    SELECT d.*
    FROM drivers d
    JOIN results r ON d.driverId = r.driverId
    WHERE r.raceId = ?
  `;
  return db.all(sql, [raceId]);
}

module.exports = {
  getAllDrivers,
  getDriverByRef,
  searchDriversBySubstring,
  getDriversByRace,
};
