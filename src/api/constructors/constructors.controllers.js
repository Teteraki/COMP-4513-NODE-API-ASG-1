const constructorsService = require("./constructors.services");

async function getConstructors(req, res) {
  try {
    const constructors = await constructorsService.fetchAllConstructors();
    res.json(constructors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getConstructorByRef(req, res) {
  try {
    const constructor = await constructorsService.fetchConstructorByRef(
      req.params.ref
    );
    res.json(constructor);
  } catch (err) {
    if (err.message.includes("not found")) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = { getConstructors, getConstructorByRef };
