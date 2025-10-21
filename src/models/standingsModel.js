const db = require("../../config/sqlite3");

async function getDriverStandingsByRace(raceId) {
  const sql = `
    SELECT ds.*,
    ra.name AS raceName,
      ra.round,
      ra.year,
      ra.date,
    d.driverRef,
      d.code,
      d.forename,
      d.surname
    FROM driverStandings ds
    JOIN drivers d ON ds.driverId = d.driverId
    JOIN races ra ON ds.raceId = ra.raceId
    WHERE ds.raceId = ?
    ORDER BY ds.position ASC;
    `;

  const rows = await db.all(sql, [raceId]);
  return rows.map((row) => {
    return {
      driverStandingsId: row.driverStandingsId,
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
      points: row.points,
      position: row.position,
      positionText: row.positionText,
      wins: row.wins,
    };
  });
}

async function getConstructorStandingsByRace(raceId) {
  const sql = `
    SELECT cs.*,
    ra.name AS raceName,
      ra.round,
      ra.year,
      ra.date,
      c.name AS constructorName,
      c.constructorRef,
      c.nationality AS constructorNationality
    FROM constructorStandings cs
    JOIN constructors c ON cs.constructorId = c.constructorId
    JOIN races ra ON cs.raceId = ra.raceId
    WHERE cs.raceId = ?
    ORDER BY cs.position ASC;
    `;

  const rows = await db.all(sql, [raceId]);
  return rows.map((row) => {
    return {
      constructorStandingsId: row.constructorStandingsId,
      race: {
        name: row.raceName,
        round: row.round,
        year: row.year,
        date: row.date,
      },
      constructor: {
        name: row.constructorName,
        constructorRef: row.constructorRef,
        nationality: row.constructorNationality,
      },
      points: row.points,
      position: row.position,
      positionText: row.positionText,
      wins: row.wins,
    };
  });
}

module.exports = { getDriverStandingsByRace, getConstructorStandingsByRace };
