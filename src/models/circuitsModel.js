// src/models/circuitsModel.js
const db = require("../../config/sqlite3");

// Returns all circuits.
function getAllCircuits() {
  return db.all("SELECT * FROM circuits");
}

// Returns a single circuit by its circuitRef.
function getCircuitByRef(circuitRef) {
  return db.get("SELECT * FROM circuits WHERE circuitRef = ?", [circuitRef]);
}

// Returns all circuits used in a given season, ordered by race round.
function getCircuitsBySeason(year) {
  const sql = `
    SELECT circuits.*, races.round, races.name AS raceName
    FROM circuits
    JOIN races ON races.circuitId = circuits.circuitId
    WHERE races.year = ?
    ORDER BY races.round ASC
  `;
  return db.all(sql, [year]);
}

module.exports = { getAllCircuits, getCircuitByRef, getCircuitsBySeason };
