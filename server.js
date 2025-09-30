require("dotenv").config();
const express = require("express");
const apiRouter = require("./src/api/api.js");

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server live on port: ${PORT}`);
});
