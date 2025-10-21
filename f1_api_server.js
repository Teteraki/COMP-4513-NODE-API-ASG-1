const express = require("express");
const apiRouter = require("./src/routes/routes");

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  let httpStatus = 500;
  if (err.message.toLowerCase().includes("not found")) {
    httpStatus = 404;
  }

  res.status(httpStatus).json({
    status: httpStatus,
    message: err.message,
    path: req.originalUrl,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server listening for requests on port: " + PORT);
});
