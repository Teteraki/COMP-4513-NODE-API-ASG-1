// src/config/db.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../data/f1.db");

// Open connection.
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connection successful!");
  }
});

// Get request with parameters.
function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// Get all request.
function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Close connection.
function dbClose() {
  db.close((err) => {
    if (err) console.error("Error closing DB:", err.message);
    else console.log("Database connection closed!");
  });
}

module.exports = { get, all, dbClose };
