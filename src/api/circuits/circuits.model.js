const { db, dbClose} = require('../../config/sqlite3.js');

const getAllCircuits = db.all("SELECT * FROM circuits", (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }

  dbClose();
});

modules.export = getAllCircuits;
