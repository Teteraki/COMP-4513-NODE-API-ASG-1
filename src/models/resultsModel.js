const db = require("../../config/sqlite3");

// Format the output json based on asg rules.
function jsonFormatter(row) {
  return {
    resultId: row.resultId,
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
    grid: row.grid,
    position: row.position,
    positionText: row.positionText,
    positionOrder: row.positionOrder,
    points: row.points,
    laps: row.laps,
    time: row.time,
    milliseconds: row.milliseconds,
    fastestLap: row.fastestLap,
    rank: row.rank,
    fastestLapTime: row.fastestLapTime,
    fastestLapSpeed: row.fastestLapSpeed,
    statusId: row.statusId,
  };
}

// Returns the matching results from a race ID.
async function getResultsByRace(raceId) {
  const sql = `
    SELECT
      r.resultId,
      r.number,
      r.grid,
      r.position,
      r.positionText,
      r.positionOrder,
      r.points,
      r.laps,
      r.time,
      r.milliseconds,
      r.fastestLap,
      r.rank,
      r.fastestLapTime,
      r.fastestLapSpeed,
      r.statusId,
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
    FROM results r
    JOIN races ra ON r.raceId = ra.raceId
    JOIN drivers d ON r.driverId = d.driverId
    JOIN constructors c ON r.constructorId = c.constructorId
    WHERE r.raceId = ?
    ORDER BY r.grid ASC;
  `;

  const rows = await db.all(sql, [raceId]);

  return rows.map(jsonFormatter);
}

// Returns the results via a provided driver ref.
async function getResultsByDriverRef(ref) {
  const sql = `
    SELECT
      r.resultId,
      r.number,
      r.grid,
      r.position,
      r.positionText,
      r.positionOrder,
      r.points,
      r.laps,
      r.time,
      r.milliseconds,
      r.fastestLap,
      r.rank,
      r.fastestLapTime,
      r.fastestLapSpeed,
      r.statusId,
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
    FROM results r
    JOIN races ra ON r.raceId = ra.raceId
    JOIN drivers d ON r.driverId = d.driverId
    JOIN constructors c ON r.constructorId = c.constructorId
    WHERE d.driverRef = ?

  `;

  const rows = await db.all(sql, [ref]);
  return rows.map(jsonFormatter);
}

// Returns the driver results by reference and a year range. (inclusive)
async function getResultsByDriverRefSeasonRange(ref, start, end) {
  const sql = `
    SELECT
      r.resultId,
      r.number,
      r.grid,
      r.position,
      r.positionText,
      r.positionOrder,
      r.points,
      r.laps,
      r.time,
      r.milliseconds,
      r.fastestLap,
      r.rank,
      r.fastestLapTime,
      r.fastestLapSpeed,
      r.statusId,
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
    FROM results r
    JOIN races ra ON r.raceId = ra.raceId
    JOIN drivers d ON r.driverId = d.driverId
    JOIN constructors c ON r.constructorId = c.constructorId
    WHERE d.driverRef = ?
      AND ra.year BETWEEN ? AND ?
  `;
  const rows = await db.all(sql, [ref, start, end]);
  return rows.map(jsonFormatter);
}

module.exports = {
  getResultsByRace,
  getResultsByDriverRef,
  getResultsByDriverRefSeasonRange,
};
