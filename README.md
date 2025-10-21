# Formula 1 API

This project is an API for querying Formula 1 data — including circuits, constructors, drivers, races, results, qualifying, and standings.  
All data is returned in **JSON format**.

---

## Built With

- **Node.js** – JS runtime
- **Express.js** – Routing
- **SQLite** – Database
- **Render** – For deployment and testing

---

## API Endpoints

| **API Endpoint**                                  | **Description**                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **/api/circuits**                                 | Get all circuits.                                                                                                                                |
| **/api/circuits/:ref**                            | Get a circuit by its reference, e.g., `/api/circuits/monaco`.                                                                                    |
| **/api/circuits/season/:year**                    | Get all circuits used in a given season, ordered by round ascending.                                                                             |
| **/api/constructors**                             | Get all constructors.                                                                                                                            |
| **/api/constructors/:ref**                        | Get a constructor by its reference, e.g., `/api/constructors/mclaren`.                                                                           |
| **/api/drivers**                                  | Get all drivers.                                                                                                                                 |
| **/api/drivers/:ref**                             | Get a driver by reference, e.g., `/api/drivers/hamilton`.                                                                                        |
| **/api/drivers/search/:substring**                | Get all drivers whose surname begins with the provided substring (case-insensitive), e.g., `/api/drivers/search/sch`.                            |
| **/api/drivers/race/:raceId**                     | Get all drivers who participated in the specified race, e.g., `/api/drivers/race/1106`.                                                          |
| **/api/races/:raceId**                            | Get the specified race, including circuit name, location, and country (no foreign key IDs).                                                      |
| **/api/races/season/:year**                       | Get all races within a season, ordered by round ascending.                                                                                       |
| **/api/races/season/:year/:round**                | Get a specific race by season and round, e.g., `/api/races/season/2022/4`.                                                                       |
| **/api/races/circuits/:ref**                      | Get all races held at a given circuit ref, ordered by year ascending.                                                                |
| **/api/races/circuits/:ref/season/:start/:end**   | Get all races for a circuit between years (inclusive).                                                                                           |
| **/api/results/:raceId**                          | Get the results for the specified race. Includes driver, race, and constructor info. Sorted by grid ascending.                                   |
| **/api/results/driver/:ref**                      | Get all results for a given driver, e.g., `/api/results/driver/max_verstappen`.                                                                  |
| **/api/results/drivers/:ref/seasons/:start/:end** | Get all results for a driver between seasons (inclusive), e.g., `/api/results/drivers/sainz/seasons/2022/2022`.                                  |
| **/api/qualifying/:raceId**                       | Get qualifying results for a specified race. Includes driver, race, and constructor info; sorted by position ascending.                          |
| **/api/standings/drivers/:raceId**                | Get the current season driver standings for the specified race, sorted by position ascending.             |
| **/api/standings/constructors/:raceId**           | Get the current season constructor standings for the specified race, sorted by position ascending.    |

---

## Example Test Links

**Live Deployment:**

- [https://comp-4513-node-api-asg-1.onrender.com](https://comp-4513-node-api-asg-1.onrender.com)

---

- [/api/circuits](https://comp-4513-node-api-asg-1.onrender.com/api/circuits)
- [/api/circuits/monza](https://comp-4513-node-api-asg-1.onrender.com/api/circuits/monza)
- [/api/circuits/calgary](https://comp-4513-node-api-asg-1.onrender.com/api/circuits/calgary)
- [/api/constructors](https://comp-4513-node-api-asg-1.onrender.com/api/constructors)
- [/api/constructors/ferrari](https://comp-4513-node-api-asg-1.onrender.com/api/constructors/ferrari)
- [/api/drivers](https://comp-4513-node-api-asg-1.onrender.com/api/drivers)
- [/api/drivers/Norris](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/Norris)
- [/api/drivers/norris](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/norris)
- [/api/drivers/connolly](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/connolly)
- [/api/drivers/search/sch](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/search/sch)
- [/api/drivers/search/xxxxx](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/search/xxxxx)
- [/api/drivers/race/1069](https://comp-4513-node-api-asg-1.onrender.com/api/drivers/race/1069)
- [/api/races/1034](https://comp-4513-node-api-asg-1.onrender.com/api/races/1034)
- [/api/races/season/2021](https://comp-4513-node-api-asg-1.onrender.com/api/races/season/2021)
- [/api/races/season/1800](https://comp-4513-node-api-asg-1.onrender.com/api/races/season/1800)
- [/api/races/season/2020/5](https://comp-4513-node-api-asg-1.onrender.com/api/races/season/2020/5)
- [/api/races/season/2020/100](https://comp-4513-node-api-asg-1.onrender.com/api/races/season/2020/100)
- [/api/races/circuits/7](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/7)
- [/api/races/circuits/monza](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/monza)
- [/api/races/circuits/7/season/2015/2022](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/7/season/2015/2022)
- [/api/races/circuits/7/season/2022/2022](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/7/season/2022/2022)
- [/api/races/circuits/monza/season/2015/2022](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/monza/season/2015/2022)
- [/api/races/circuits/monza/season/2022/2022](https://comp-4513-node-api-asg-1.onrender.com/api/races/circuits/monza/season/2022/2022)
- [/api/results/1106](https://comp-4513-node-api-asg-1.onrender.com/api/results/1106)
- [/api/results/driver/max_verstappen](https://comp-4513-node-api-asg-1.onrender.com/api/results/driver/max_verstappen)
- [/api/results/driver/connolly](https://comp-4513-node-api-asg-1.onrender.com/api/results/driver/connolly)
- [/api/results/drivers/sainz/seasons/2021/2022](https://comp-4513-node-api-asg-1.onrender.com/api/results/drivers/sainz/seasons/2021/2022)
- [/api/results/drivers/sainz/seasons/2035/2022](https://comp-4513-node-api-asg-1.onrender.com/api/results/drivers/sainz/seasons/2035/2022)
- [/api/qualifying/1106](https://comp-4513-node-api-asg-1.onrender.com/api/qualifying/1106)
- [/api/standings/drivers/1120](https://comp-4513-node-api-asg-1.onrender.com/api/standings/drivers/1120)
- [/api/standings/constructors/1120](https://comp-4513-node-api-asg-1.onrender.com/api/standings/constructors/1120)
- [/api/standings/constructors/asds](https://comp-4513-node-api-asg-1.onrender.com/api/standings/constructors/asds)
