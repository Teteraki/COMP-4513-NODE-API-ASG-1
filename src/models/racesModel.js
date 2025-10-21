const db = require("../../config/sqlite3");

// Return the specified race.
function getRaceById(raceId) {
  const sql = `
    SELECT 
      r.raceId,
      r.year,
      r.round,
      c.name as circuitName,
      c.location AS circuitLocation,
      c.country AS circuitCountry,
      r.date,
      r.time,
      r.url
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId
    WHERE r.raceId = ?
  `;
  return db.get(sql, [raceId]);
}

// Return the races within a given season ordered by round ascending.
function getRacesBySeason(year) {
  return db.all(
    `SELECT 
      r.raceId,
      r.year,
      r.round,
      c.name as circuitName,
      c.location AS circuitLocation,
      c.country AS circuitCountry,
      r.date,
      r.time,
      r.url
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId 
    WHERE year = ? 
    ORDER BY round ASC`,
    [year]
  );
}

// Return a specific race within a given season and round number.
function getRaceBySeasonAndRound(year, round) {
  return db.get(
    `SELECT 
      r.raceId,
      r.year,
      r.round,
      c.name as circuitName,
      c.location AS circuitLocation,
      c.country AS circuitCountry,
      r.date,
      r.time,
      r.url
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId 
    WHERE year = ? 
    AND round = ?`,
    [year, round]
  );
}

// Return all races for a circuit ref, ordered by year ascending.
function getRacesByCircuit(ref) {
  const sql = `
    SELECT 
      r.raceId,
      r.year,
      r.round,
      c.name as circuitName,
      c.location AS circuitLocation,
      c.country AS circuitCountry,
      r.date,
      r.time,
      r.url
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId 
    WHERE c.circuitRef = ?
    ORDER BY r.year ASC
  `;
  return db.all(sql, [ref]);
}

// Return all races for a circuit between years (inclusive).
function getRacesByCircuitSeasonRange(ref, start, end) {
  const sql = `
    SELECT 
      r.raceId,
      r.year,
      r.round,
      c.name as circuitName,
      c.location AS circuitLocation,
      c.country AS circuitCountry,
      r.date,
      r.time,
      r.url
    FROM races r
    JOIN circuits c ON r.circuitId = c.circuitId
    WHERE c.circuitRef = ?
    AND r.year BETWEEN ? AND ?
  `;
  return db.all(sql, [ref, start, end]);
}

module.exports = {
  getRaceById,
  getRacesBySeason,
  getRaceBySeasonAndRound,
  getRacesByCircuit,
  getRacesByCircuitSeasonRange,
};
