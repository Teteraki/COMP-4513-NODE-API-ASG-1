const { db, dbClose } = require("../../config/sqlite3.js");

function getAllConstructors() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM constructors", (err, rows) => {
      if (err) {
        reject(err); // reject the promise on error
      } else {
        resolve(rows); // resolve with the rows on success
      }
    });
  });
}

function getConstructorRef(ref) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM constructors WHERE constructorRef = ?`,
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

module.exports = { getAllConstructors, getConstructorRef };
