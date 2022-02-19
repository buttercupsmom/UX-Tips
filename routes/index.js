const express = require("express");

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
// TODO: import your diagnostics route
const diagonosticsRouter = require("./diagnostics");

const app = express();

app.use("/tips", tipsRouter);
app.use("/feedback", feedbackRouter);
// TODO: Initialize diagnostics route
app.use("/diagnostics", diagonosticsRouter);

module.exports = app;
