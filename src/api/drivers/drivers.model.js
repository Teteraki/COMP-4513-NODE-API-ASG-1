const { db, dbClose } = require("../../config/sqlite3.js");

function getAllDrivers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM drivers", (err, rows) => {
      if (err) {
        reject(err); // reject the promise on error
      } else {
        resolve(rows); // resolve with the rows on success
      }
    });
  });
}

function getDriverRef(ref) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM drivers WHERE driverRef = ?`,
      [ref],
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

function getDriversSurname(surname) {
    db.get(
      `SELECT * FROM drivers WHERE surname = ?`,
      [surname],
      (err, row) => {
        if (err) {
          return reject(err);
        } else {
          resolve(row);
        }
      }
    );
  
}

function getDriversRaceID(id) {
    return null;
    
    // new Promise((resolve, reject) => {
    //     db.get(

    //         `
    //         SELECT drivers.*, qualifying.raceId, race.raceId, 
    //         `
    //         //Returns the drivers within a given race, e.g.,
    //         // /api/drivers/race/1106
    //     )
    // })
}

module.exports = {  getAllDrivers, getDriverRef, getDriversSurname, getDriversRaceID  }; 