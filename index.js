const express = require("express");

const { consumer } = require("./consumer");

const app = express();

const server = app.listen(3000, () => {
  console.log(`Server started !!`);
});
