const express = require("express");
const apiRoute = require("./apiroutes");
const htmlRoute = require("./htmlroutes");

const router = express.Router();

router.use("/api", apiRoute);

router.use("/", htmlRoute);

module.exports = router;