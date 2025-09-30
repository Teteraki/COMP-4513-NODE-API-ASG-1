// call the models
const constructorsModel = require("./constructors.model");

async function fetchAllConstructors() {
  return await constructorsModel.getAllConstructors();
}

async function fetchConstructorByRef(ref) {
  const constructor = await constructorsModel.getConstructorRef(ref);
  if (!constructor) {
    throw new Error("Constructor with ref: " + ref + " not found.");
  }
  return constructor;
}

module.exports = { fetchAllConstructors, fetchConstructorByRef };
