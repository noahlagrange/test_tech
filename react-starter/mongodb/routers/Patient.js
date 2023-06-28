const express = require('express');
const router = express.Router();
const prodctrl = require("../controllers/Patient")

router.post('/', prodctrl.createPatient);

router.get('/:id', prodctrl.getonePatient);

router.get('/', prodctrl.getallPatient);

router.delete('/:id', prodctrl.deletePatient);

module.exports = router;