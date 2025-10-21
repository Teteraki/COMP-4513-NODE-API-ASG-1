const constructorsModel = require("../models/constructorsModel");

// Get request for all constructors.
async function getAllConstructors(req, res, next) {
  try {
    const data = await constructorsModel.getAllConstructors();
    if (!data || data.length === 0)
      return res.status(404).json({ message: "No constructors found" });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Get request for a constructor with specified ref.
async function getConstructorByRef(req, res, next) {
  try {
    const { ref } = req.params;
    const data = await constructorsModel.getConstructorByRef(ref);
    if (!data)
      return res
        .status(404)
        .json({ message: `Constructor not found for ref: ${ref}` });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllConstructors, getConstructorByRef };
