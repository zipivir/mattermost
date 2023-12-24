const express = require('express');
const { getSources, uploadSources } = require("./controllers/source.js");

const router = express.Router();


router.get('/getSources' , getSources);
router.post('/uploadSources', uploadSources);

module.exports = router;