const db = require("../../config/sqlite3");

function jsonFormatter(row) {
  return {
    qualifyId: row.qualifyId,
    race: {
      name: row.raceName,
      round: row.round,
      year: row.year,
      date: row.date,
    },
    driver: {
      driverRef: row.driverRef,
      code: row.code,
      forename: row.forename,
      surname: row.surname,
    },
    constructor: {
      name: row.constructorName,
      constructorRef: row.constructorRef,
      nationality: row.constructorNationality,
    },
    number: row.number,
    position: row.position,
    q1: row.q1,
    q2: row.q2,
    q3: row.q3,
  };
}

async function getQualifyingByRace(raceId) {
  const sql = `
    SELECT q.*,
      ra.name AS raceName,
      ra.round,
      ra.year,
      ra.date,
      d.driverRef,
      d.code,
      d.forename,
      d.surname,
      c.name AS constructorName,
      c.constructorRef,
      c.nationality AS constructorNationality
    FROM qualifying q
    JOIN races ra ON q.raceId = ra.raceId
    JOIN drivers d ON q.driverId = d.driverId
    JOIN constructors c ON q.constructorId = c.constructorId
    WHERE q.raceId = ?
    ORDER BY q.position ASC;
    `;

  const rows = await db.all(sql, [raceId]);
  return rows.map(jsonFormatter);
}

module.exports = { getQualifyingByRace };
