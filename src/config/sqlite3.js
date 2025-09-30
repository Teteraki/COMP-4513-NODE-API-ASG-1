// Import sqlite3 module.
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../data/f1.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("Database connection failed: " + err.message);
  } else {
    console.log("Database connection successful!");
  }
});

function dbClose() {
  db.close();
  console.log("Database connection closed!");
}

module.exports = { db, dbClose };
