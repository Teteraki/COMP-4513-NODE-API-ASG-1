const db = require("../../config/sqlite3");

// Returns all constructors.
function getAllConstructors() {
  return db.all("SELECT * FROM constructors");
}

// Returns the specified circuit.
function getConstructorByRef(ref) {
  return db.get("SELECT * FROM constructors WHERE constructorRef = ?", [ref]);
}

module.exports = { getAllConstructors, getConstructorByRef };
