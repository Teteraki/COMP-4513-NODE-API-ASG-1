const { db, dbClose } = require("../../config/sqlite3.js");

function getAllCircuits() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM circuits", (err, rows) => {
      if (err) {
        reject(err); // reject the promise on error
      } else {
        resolve(rows); // resolve with the rows on success
      }
    });
  });
}

function getCircuitRef(circuitRef) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM circuits WHERE circuitRef = ?`,
      [circuitRef],
      (err, row) => {
        if (err) {
          return reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}

function getSeasonYear(year) {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT circuits.*, races.round, races.name AS raceName
       FROM circuits
       JOIN races ON races.circuitId = circuits.circuitId
       WHERE races.year = ?
       ORDER BY races.round ASC`,
      [year],
      (err, rows) => {
        if (err) {
          return reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

module.exports = { getAllCircuits, getCircuitRef, getSeasonYear };
