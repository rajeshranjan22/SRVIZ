const express = require("express");
const router = express.Router();

const { submitLead } = require("../controllers/lead.controller");

router.post("/", submitLead);

module.exports = router;
